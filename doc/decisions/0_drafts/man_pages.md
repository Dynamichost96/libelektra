# Man Pages

## Problem

Our man pages are written as Markdown in `doc/help` and then converted to roff and stored in `doc/man`.
These are the only generated files in our version control system.
Having such files is a problematic workaround, which was introduced because `ronn-ng` is not available on most distributions.
The poor availability of the package `ronn-ng` is a problem because distributions usually build packages by exclusively relying on other packages of the distribution.
E.g. `dpkg-buildpackage` must work with only `deb` packages installed (and not any packages via `gem`, as would be needed to get `ronn-ng v0.10.1`).

We have a mechanism to automatically disable (re)building man pages.
But we want to avoid that distributions build packages without man pages, hence we added the generated files.

Storing generated files, however, is problematic, as it requires:

- developers to always update generated files if the sources are changed
- developers not committing irrelevant changes to generated files (e.g. as may occur with different `CMAKE_INSTALL_PREFIX` etc.)
- require extra effort for continuous integration, e.g. [#4542](https://issues.libelektra.org/4542)

TODO: everything below is draft, please don't comment on it.

## Constraints

1. we want beautiful rendered man pages, e.g., OPTIONS section looks like normal man pages, see in Notes¹ below
2. we cannot require rare tools for the build process: the man pages must be present in every package

## Assumptions

## Considered Alternatives

0. staying with `ronn-ng` but add the man pages only in the release tarballs but not to `git`
1. Write a tool that converts our specification, similar to [pythongen](/src/tools/pythongen/template/template.man)
2. Write a tool that parses gopts `--help` output
3. [help2man](https://www.gnu.org/software/help2man/)
4. Doxygen:
   - Constraint 1 probably broken
5. Pandoc:
   - has a few standard dependencies
   - would need rewrite of the current documentation in doc/help:
     - To fulfill Constraint 1 [definition lists](https://pandoc.org/MANUAL.html#definition-lists) would be needed
     - would need YAML metadata/front matter for every file
       (It would be possible, but not advisable, to:
       - also pass information as command-line arguments via `--variable` but then we would move meta-information about man pages to the build system
       - that we use the current (non-standard) front matter and convert it to Pandoc's frontmatter but this makes the build system more complicated)

## Decision

Not yet done except spelling of man pages, see [#4567](https://issues.libelektra.org/4567).

## Rationale

## Implications

## Related Decisions

- []()
- []()
- []()

## Notes

¹ ronn-ng converts:

```
- `-H`, `--help`:
  Show the man page.
- `-V`, `--version`:
  Print version info.
- `-p`, `--profile <profile>`:
  Use a different kdb profile.
```

to:

```
OPTIONS
       -H, --help
              Show the man page.

       -V, --version
              Print version info.

       -p, --profile <profile>
              Use a different kdb profile.
```
