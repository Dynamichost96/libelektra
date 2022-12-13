# Copy-on-Write

The two basic Elektra datastructures `Key` and `KeySet` implement full copy-on-write (COW) functionality.
If a key or a keyset gets copied, only a shallow copy with references to the original data (name, value, contained keys, etc.) is created.
When this shared data is modified, new memory is allocated to keep the shared version in tact.
Each piece of data (name, value, etc.) has a separate reference count to facilitate this.
As a consequence, duplicated keys or keysets only require a fraction of the memory compared to their source counterparts.

## Working principle

The main principle for the copy-on-write approach is simple: separate the data from the identity of a `Key` or `KeySet`.
Developers using Elektra only get references to `Key` and `KeySet` objects.
Those objects themselves do not hold any data.
They only contain references to other entities holding the data.
This allows transparently sharing the data-holding entities between multiple identifying entities.

The main entities for copy-on-write are depicted in the following diagram:

```mermaid
classDiagram
    Key *-- "0..1" KeyName : keyName
    Key *-- "0..1" KeyData : keyData

    KeySet *-- "0..1" KeySetData : data

    Key o-- "0..1" KeySet : meta
    KeySetData o-- "*" Key : array

    Key : - uint16_t refs
    Key : - keyflag_t flags

    KeyName : - char * name
    KeyName : - char * uname
    KeyName : - uint16_t refs
    KeyName : - uint16_t flags

    KeyData : - void * data
    KeyData : - uint16_t refs
    KeyData : - uint16_t flags

    KeySet : - uint16_t refs
    KeySet : - ksflag_t flags

    KeySetData : - uint16_t refs
    KeySetData : - uint16_t flags
```

- `Key`: logically represents a key. No data is actually stored in it.
  - `KeyName`: holds the name of a key. May be shared between multiple `Key` objects.
  - `KeyData`: holds the value of a key. May be shared between multiple `Key` objects.
- `KeySet`: logically represents a collection of keys. No data is actually stored in it.
  - `KeySetData`: holds an array of `Key` objects. May be shared between multiple `KeySet` objects.

When creating instances of `Key` and `KeySet` via `keyNew` or `ksNew`, we allocate the least amount possible.
For `Key`, we only allocate a `KeyName` entity (while not technically necessary, it significantly simplifies some internal uses).
For `KeySet`, we allocate no other entities.
The missing entities will get allocated when needed.

If the name of a key gets modified, we first ensure that the `Key` holds the only reference to its `KeyName`.
If it isn't, then a new `KeyName` object is allocated for it.
Depending on the type of modification, the value of the name is also copied.
The modifications to the name are then performed on the new `KeyName` entity.

The same applies for the value of a key, and for the data contained in keysets.

When copying the name or value of a key, or data of a keyset, via `keyCopy`, `ksCopy`, `keyDup` or `ksDup`, we point the according references in the `destination` object to the entities of the `source` object.
The reference counter of those entities is increased accordingly.
The previous entities of the `destination` object will get their reference count decreased, and if they reach 0 they will be `free`d.

## Reference counting

All entities are reference counted.
The reference count is stored in each entity in an unsigned 16-bit integer variable `refs`.
The special value `UINT16_MAX` is reserved as an error indicator, so the maximum number of references for each entity is `UINT16_MAX - 1` or 65534.

The reference counting mechanisms for `Key` and `KeySet` are part of the public API.

A reference count of 0 for `KeyName`, `KeyData` and `KeySetData` is illegal outside the public API function calls that cause the creation/deletion these structures.

## Integration with `mmapstorage`

The `mmapstorage` plugin needs a flag for every entity to indicate whether the entity is stored via `mmap` or normally allocated via `malloc`. If an entity is flagged as being stored in `mmap`, it must **never** be freed using `free`.

The following flags are responsible for each entity:

- `Key`: `KEY_FLAG_MMAP_STRUCT` is set on the `flags` field
- `KeyName`: `KEY_FLAG_MMAP_KEY` is set on the `flags` field
- `KeyData`: `KS_FLAG_MMAP_Data` is set on the `flags` field
- `KeySet`: `KS_FLAG_MMAP_STRUCT` is set on the `flags` field
- `KeySetData`: `KS_FLAG_MMAP_ARRAY` is set on the `flags` field
