'use strict';

var angular = require('angular');

angular.module('elektra.rest.angular')
	   .constant('config', {
	"backend": {
		"root": "http://localhost:8080/",
		"website": {
			"content_root": "website/"
		}
	},
	"github": {
		"website": {
			"root": "https://github.com/",
			"paths": {
				"issues": "ElektraInitiative/libelektra/issues/new"
			}
		}
	},
	"translations": {
		"enabled": ["en"],
		"mappings": {
			"en_US": "en",
			"en_UK": "en"
		},
		"default": "en"
	},
	"logger": {
		"enabled": true
	}
})
	   .constant('webStructure', [
    {
        "name": "Documentation",
        "type": "submenu",
        "ref": "documentation",
        "children": [
            {
                "name": "Getting started",
                "type": "listfiles",
                "ref": "docgettingstarted",
                "children": [
                    {
                        "name": "Compiling",
                        "type": "file",
                        "options": {
                            "path": "doc/COMPILE.md"
                        },
                        "slug": "compiling"
                    },
                    {
                        "name": "Installation",
                        "type": "file",
                        "options": {
                            "path": "doc/INSTALL.md"
                        },
                        "slug": "installation"
                    }
                ]
            },
            {
                "name": "Tutorials",
                "type": "listfiles",
                "ref": "tutorials",
                "children": [
                    {
                        "name": "Application Integration",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/application-integration.md"
                        },
                        "slug": "application-integration"
                    },
                    {
                        "name": "Cascading",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/cascading.md"
                        },
                        "slug": "cascading"
                    },
                    {
                        "name": "Compilation Variants",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/compilation-variants.md"
                        },
                        "slug": "compilation-variants"
                    },
                    {
                        "name": "Elektra Merge-integration",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/elektra-merge-integration.md"
                        },
                        "slug": "elektra-merge-integration"
                    },
                    {
                        "name": "Export Dump",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/export-dump.md"
                        },
                        "slug": "export-dump"
                    },
                    {
                        "name": "Export",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/export.md"
                        },
                        "slug": "export"
                    },
                    {
                        "name": "Import",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/import.md"
                        },
                        "slug": "import"
                    },
                    {
                        "name": "Merge",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/merge.md"
                        },
                        "slug": "merge"
                    },
                    {
                        "name": "Namespaces",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/namespaces.md"
                        },
                        "slug": "namespaces"
                    },
                    {
                        "name": "Plugins",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/plugins.md"
                        },
                        "slug": "plugins"
                    },
                    {
                        "name": "Python Kdb",
                        "type": "file",
                        "options": {
                            "path": "doc/tutorials/python-kdb.md"
                        },
                        "slug": "python-kdb"
                    }
                ]
            },
            {
                "name": "Plugins",
                "type": "listfiles",
                "ref": "plugins",
                "children": [
                    {
                        "name": "README",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/README.md"
                        },
                        "slug": "readme"
                    },
                    {
                        "name": "Resolver",
                        "type": "section"
                    },
                    {
                        "name": "resolver",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/resolver/README.md"
                        },
                        "slug": "resolver"
                    },
                    {
                        "name": "wresolver",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/wresolver/README.md"
                        },
                        "slug": "wresolver"
                    },
                    {
                        "name": "noresolver",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/noresolver/README.md"
                        },
                        "slug": "noresolver"
                    },
                    {
                        "name": "gitresolver",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/gitresolver/README.md"
                        },
                        "slug": "gitresolver"
                    },
                    {
                        "name": "curlget",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/curlget/README.md"
                        },
                        "slug": "curlget"
                    },
                    {
                        "name": "blockresolver",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/blockresolver/README.md"
                        },
                        "slug": "blockresolver"
                    },
                    {
                        "name": "sync",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/sync/README.md"
                        },
                        "slug": "sync"
                    },
                    {
                        "name": "Storage",
                        "type": "section"
                    },
                    {
                        "name": "dump",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/dump/README.md"
                        },
                        "slug": "dump"
                    },
                    {
                        "name": "augeas",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/augeas/README.md"
                        },
                        "slug": "augeas"
                    },
                    {
                        "name": "hosts",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/hosts/README.md"
                        },
                        "slug": "hosts"
                    },
                    {
                        "name": "line",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/line/README.md"
                        },
                        "slug": "line"
                    },
                    {
                        "name": "tcl",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/tcl/README.md"
                        },
                        "slug": "tcl"
                    },
                    {
                        "name": "ni",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/ni/README.md"
                        },
                        "slug": "ni"
                    },
                    {
                        "name": "ini",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/ini/README.md"
                        },
                        "slug": "ini"
                    },
                    {
                        "name": "xmltool",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/xmltool/README.md"
                        },
                        "slug": "xmltool"
                    },
                    {
                        "name": "yajl",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/yajl/README.md"
                        },
                        "slug": "yajl"
                    },
                    {
                        "name": "fstab",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/fstab/README.md"
                        },
                        "slug": "fstab"
                    },
                    {
                        "name": "regexstore",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/regexstore/README.md"
                        },
                        "slug": "regexstore"
                    },
                    {
                        "name": "simpleini",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/simpleini/README.md"
                        },
                        "slug": "simpleini"
                    },
                    {
                        "name": "csvstorage",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/csvstorage/README.md"
                        },
                        "slug": "csvstorage"
                    },
                    {
                        "name": "passwd",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/passwd/README.md"
                        },
                        "slug": "passwd"
                    },
                    {
                        "name": "dpkg",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/dpkg/README.md"
                        },
                        "slug": "dpkg"
                    },
                    {
                        "name": "mozprefs",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/mozprefs/README.md"
                        },
                        "slug": "mozprefs"
                    },
                    {
                        "name": "c",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/c/README.md"
                        },
                        "slug": "c"
                    },
                    {
                        "name": "System Information",
                        "type": "section"
                    },
                    {
                        "name": "constants",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/constants/README.md"
                        },
                        "slug": "constants"
                    },
                    {
                        "name": "desktop",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/desktop/README.md"
                        },
                        "slug": "desktop"
                    },
                    {
                        "name": "uname",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/uname/README.md"
                        },
                        "slug": "uname"
                    },
                    {
                        "name": "Filter",
                        "type": "section"
                    },
                    {
                        "name": "cachefilter",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/cachefilter/README.md"
                        },
                        "slug": "cachefilter"
                    },
                    {
                        "name": "Encoding",
                        "type": "section"
                    },
                    {
                        "name": "ccode",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/ccode/README.md"
                        },
                        "slug": "ccode"
                    },
                    {
                        "name": "hexcode",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/hexcode/README.md"
                        },
                        "slug": "hexcode"
                    },
                    {
                        "name": "base64",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/base64/README.md"
                        },
                        "slug": "base64"
                    },
                    {
                        "name": "keytometa",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/keytometa/README.md"
                        },
                        "slug": "keytometa"
                    },
                    {
                        "name": "rename",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/rename/README.md"
                        },
                        "slug": "rename"
                    },
                    {
                        "name": "boolean",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/boolean/README.md"
                        },
                        "slug": "boolean"
                    },
                    {
                        "name": "crypto",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/crypto/README.md"
                        },
                        "slug": "crypto"
                    },
                    {
                        "name": "iconv",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/iconv/README.md"
                        },
                        "slug": "iconv"
                    },
                    {
                        "name": "hidden",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/hidden/README.md"
                        },
                        "slug": "hidden"
                    },
                    {
                        "name": "null",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/null/README.md"
                        },
                        "slug": "null"
                    },
                    {
                        "name": "Notification and Logging",
                        "type": "section"
                    },
                    {
                        "name": "dbus",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/dbus/README.md"
                        },
                        "slug": "dbus"
                    },
                    {
                        "name": "journald",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/journald/README.md"
                        },
                        "slug": "journald"
                    },
                    {
                        "name": "syslog",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/syslog/README.md"
                        },
                        "slug": "syslog"
                    },
                    {
                        "name": "logchange",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/logchange/README.md"
                        },
                        "slug": "logchange"
                    },
                    {
                        "name": "Debug",
                        "type": "section"
                    },
                    {
                        "name": "timeofday",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/timeofday/README.md"
                        },
                        "slug": "timeofday"
                    },
                    {
                        "name": "tracer",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/tracer/README.md"
                        },
                        "slug": "tracer"
                    },
                    {
                        "name": "counter",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/counter/README.md"
                        },
                        "slug": "counter"
                    },
                    {
                        "name": "Checker",
                        "type": "section"
                    },
                    {
                        "name": "glob",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/glob/README.md"
                        },
                        "slug": "glob"
                    },
                    {
                        "name": "struct",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/struct/README.md"
                        },
                        "slug": "struct"
                    },
                    {
                        "name": "spec",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/spec/README.md"
                        },
                        "slug": "spec"
                    },
                    {
                        "name": "validation",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/validation/README.md"
                        },
                        "slug": "validation"
                    },
                    {
                        "name": "network",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/network/README.md"
                        },
                        "slug": "network"
                    },
                    {
                        "name": "path",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/path/README.md"
                        },
                        "slug": "path"
                    },
                    {
                        "name": "type",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/type/README.md"
                        },
                        "slug": "type"
                    },
                    {
                        "name": "enum",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/enum/README.md"
                        },
                        "slug": "enum"
                    },
                    {
                        "name": "mathcheck",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/mathcheck/README.md"
                        },
                        "slug": "mathcheck"
                    },
                    {
                        "name": "conditionals",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/conditionals/README.md"
                        },
                        "slug": "conditionals"
                    },
                    {
                        "name": "filecheck",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/filecheck/README.md"
                        },
                        "slug": "filecheck"
                    },
                    {
                        "name": "Interpreter",
                        "type": "section"
                    },
                    {
                        "name": "jni",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/jni/README.md"
                        },
                        "slug": "jni"
                    },
                    {
                        "name": "python",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/python/README.md"
                        },
                        "slug": "python"
                    },
                    {
                        "name": "python2",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/python2/README.md"
                        },
                        "slug": "python2"
                    },
                    {
                        "name": "lua",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/lua/README.md"
                        },
                        "slug": "lua"
                    },
                    {
                        "name": "shell",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/shell/README.md"
                        },
                        "slug": "shell"
                    },
                    {
                        "name": "Others",
                        "type": "section"
                    },
                    {
                        "name": "doc",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/doc/README.md"
                        },
                        "slug": "doc"
                    },
                    {
                        "name": "error",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/error/README.md"
                        },
                        "slug": "error"
                    },
                    {
                        "name": "template",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/template/README.md"
                        },
                        "slug": "template"
                    },
                    {
                        "name": "lineendings",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/lineendings/README.md"
                        },
                        "slug": "lineendings"
                    },
                    {
                        "name": "list",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/list/README.md"
                        },
                        "slug": "list"
                    },
                    {
                        "name": "iterate",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/iterate/README.md"
                        },
                        "slug": "iterate"
                    },
                    {
                        "name": "semlock",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/semlock/README.md"
                        },
                        "slug": "semlock"
                    },
                    {
                        "name": "profile",
                        "type": "file",
                        "options": {
                            "path": "src/plugins/profile/README.md"
                        },
                        "slug": "profile"
                    }
                ]
            },
            {
                "name": "Tools",
                "type": "listfiles",
                "ref": "tools",
                "children": [
                    {
                        "name": "Gen",
                        "type": "file",
                        "options": {
                            "path": "src/tools/gen/README.md"
                        },
                        "slug": "gen"
                    },
                    {
                        "name": "Qt Gui",
                        "type": "file",
                        "options": {
                            "path": "src/tools/qt-gui/README.md"
                        },
                        "slug": "qt-gui"
                    },
                    {
                        "name": "Rest Frontend",
                        "type": "file",
                        "options": {
                            "path": "src/tools/rest-frontend/README.md"
                        },
                        "slug": "rest-frontend"
                    }
                ]
            },
            {
                "name": "Manpages",
                "type": "listfiles",
                "ref": "manpages",
                "children": [
                    {
                        "name": "Elektra Algorithm",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-algorithm.md"
                        },
                        "slug": "elektra-algorithm"
                    },
                    {
                        "name": "Elektra Architecture",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-architecture.md"
                        },
                        "slug": "elektra-architecture"
                    },
                    {
                        "name": "Elektra Backends",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-backends.md"
                        },
                        "slug": "elektra-backends"
                    },
                    {
                        "name": "Elektra Bootstrapping",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-bootstrapping.md"
                        },
                        "slug": "elektra-bootstrapping"
                    },
                    {
                        "name": "Elektra Cascading",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-cascading.md"
                        },
                        "slug": "elektra-cascading"
                    },
                    {
                        "name": "Elektra Classes",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-classes.md"
                        },
                        "slug": "elektra-classes"
                    },
                    {
                        "name": "Elektra Contracts",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-contracts.md"
                        },
                        "slug": "elektra-contracts"
                    },
                    {
                        "name": "Elektra Data-structures",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-data-structures.md"
                        },
                        "slug": "elektra-data-structures"
                    },
                    {
                        "name": "Elektra Error-handling",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-error-handling.md"
                        },
                        "slug": "elektra-error-handling"
                    },
                    {
                        "name": "Elektra Glossary",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-glossary.md"
                        },
                        "slug": "elektra-glossary"
                    },
                    {
                        "name": "Elektra Granularity",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-granularity.md"
                        },
                        "slug": "elektra-granularity"
                    },
                    {
                        "name": "Elektra Hierarchy",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-hierarchy.md"
                        },
                        "slug": "elektra-hierarchy"
                    },
                    {
                        "name": "Elektra Introduction",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-introduction.md"
                        },
                        "slug": "elektra-introduction"
                    },
                    {
                        "name": "Elektra Key-names",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-key-names.md"
                        },
                        "slug": "elektra-key-names"
                    },
                    {
                        "name": "Elektra Merge-strategy",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-merge-strategy.md"
                        },
                        "slug": "elektra-merge-strategy"
                    },
                    {
                        "name": "Elektra Meta-data",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-meta-data.md"
                        },
                        "slug": "elektra-meta-data"
                    },
                    {
                        "name": "Elektra Mounting",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-mounting.md"
                        },
                        "slug": "elektra-mounting"
                    },
                    {
                        "name": "Elektra Namespaces",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-namespaces.md"
                        },
                        "slug": "elektra-namespaces"
                    },
                    {
                        "name": "Elektra Plugins-framework",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-plugins-framework.md"
                        },
                        "slug": "elektra-plugins-framework"
                    },
                    {
                        "name": "Elektra Plugins-ordering",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-plugins-ordering.md"
                        },
                        "slug": "elektra-plugins-ordering"
                    },
                    {
                        "name": "Elektra Related",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-related.md"
                        },
                        "slug": "elektra-related"
                    },
                    {
                        "name": "Elektra Semantics",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-semantics.md"
                        },
                        "slug": "elektra-semantics"
                    },
                    {
                        "name": "Elektra Spec",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-spec.md"
                        },
                        "slug": "elektra-spec"
                    },
                    {
                        "name": "Elektra Sync-flag",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-sync-flag.md"
                        },
                        "slug": "elektra-sync-flag"
                    },
                    {
                        "name": "Elektra Values",
                        "type": "file",
                        "options": {
                            "path": "doc/help/elektra-values.md"
                        },
                        "slug": "elektra-values"
                    },
                    {
                        "name": "Kdb Check",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-check.md"
                        },
                        "slug": "kdb-check"
                    },
                    {
                        "name": "Kdb Convert",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-convert.md"
                        },
                        "slug": "kdb-convert"
                    },
                    {
                        "name": "Kdb Cp",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-cp.md"
                        },
                        "slug": "kdb-cp"
                    },
                    {
                        "name": "Kdb Editor",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-editor.md"
                        },
                        "slug": "kdb-editor"
                    },
                    {
                        "name": "Kdb Export",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-export.md"
                        },
                        "slug": "kdb-export"
                    },
                    {
                        "name": "Kdb File",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-file.md"
                        },
                        "slug": "kdb-file"
                    },
                    {
                        "name": "Kdb Fstab",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-fstab.md"
                        },
                        "slug": "kdb-fstab"
                    },
                    {
                        "name": "Kdb Get",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-get.md"
                        },
                        "slug": "kdb-get"
                    },
                    {
                        "name": "Kdb Getmeta",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-getmeta.md"
                        },
                        "slug": "kdb-getmeta"
                    },
                    {
                        "name": "Kdb Global-mount",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-global-mount.md"
                        },
                        "slug": "kdb-global-mount"
                    },
                    {
                        "name": "Kdb Help",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-help.md"
                        },
                        "slug": "kdb-help"
                    },
                    {
                        "name": "Kdb Import",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-import.md"
                        },
                        "slug": "kdb-import"
                    },
                    {
                        "name": "Kdb Info",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-info.md"
                        },
                        "slug": "kdb-info"
                    },
                    {
                        "name": "Kdb Introduction",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-introduction.md"
                        },
                        "slug": "kdb-introduction"
                    },
                    {
                        "name": "Kdb List-tools",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-list-tools.md"
                        },
                        "slug": "kdb-list-tools"
                    },
                    {
                        "name": "Kdb List",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-list.md"
                        },
                        "slug": "kdb-list"
                    },
                    {
                        "name": "Kdb Ls",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-ls.md"
                        },
                        "slug": "kdb-ls"
                    },
                    {
                        "name": "Kdb Lsmeta",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-lsmeta.md"
                        },
                        "slug": "kdb-lsmeta"
                    },
                    {
                        "name": "Kdb Merge",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-merge.md"
                        },
                        "slug": "kdb-merge"
                    },
                    {
                        "name": "Kdb Mount",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-mount.md"
                        },
                        "slug": "kdb-mount"
                    },
                    {
                        "name": "Kdb Mv",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-mv.md"
                        },
                        "slug": "kdb-mv"
                    },
                    {
                        "name": "Kdb Remount",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-remount.md"
                        },
                        "slug": "kdb-remount"
                    },
                    {
                        "name": "Kdb Rm",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-rm.md"
                        },
                        "slug": "kdb-rm"
                    },
                    {
                        "name": "Kdb Set",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-set.md"
                        },
                        "slug": "kdb-set"
                    },
                    {
                        "name": "Kdb Setmeta",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-setmeta.md"
                        },
                        "slug": "kdb-setmeta"
                    },
                    {
                        "name": "Kdb Sget",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-sget.md"
                        },
                        "slug": "kdb-sget"
                    },
                    {
                        "name": "Kdb Shell",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-shell.md"
                        },
                        "slug": "kdb-shell"
                    },
                    {
                        "name": "Kdb Spec-mount",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-spec-mount.md"
                        },
                        "slug": "kdb-spec-mount"
                    },
                    {
                        "name": "Kdb Test",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-test.md"
                        },
                        "slug": "kdb-test"
                    },
                    {
                        "name": "Kdb Umount",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-umount.md"
                        },
                        "slug": "kdb-umount"
                    },
                    {
                        "name": "Kdb Vset",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb-vset.md"
                        },
                        "slug": "kdb-vset"
                    },
                    {
                        "name": "Kdb",
                        "type": "file",
                        "options": {
                            "path": "doc/help/kdb.md"
                        },
                        "slug": "kdb"
                    }
                ]
            }
        ]
    },
    {
        "name": "Development",
        "type": "submenu",
        "ref": "development",
        "children": [
            {
                "name": "Getting started",
                "type": "listfiles",
                "ref": "devgettingstarted",
                "children": [
                    {
                        "name": "Coding",
                        "type": "file",
                        "options": {
                            "path": "doc/CODING.md"
                        },
                        "slug": "coding"
                    }
                ]
            },
            {
                "name": "Examples",
                "type": "listfiles",
                "ref": "examples",
                "children": [
                    {
                        "name": "Basename",
                        "type": "file",
                        "options": {
                            "path": "examples/basename.c"
                        },
                        "slug": "basename"
                    },
                    {
                        "name": "Cascading",
                        "type": "file",
                        "options": {
                            "path": "examples/cascading.c"
                        },
                        "slug": "cascading"
                    },
                    {
                        "name": "Cut",
                        "type": "file",
                        "options": {
                            "path": "examples/cut.c"
                        },
                        "slug": "cut"
                    },
                    {
                        "name": "Functional",
                        "type": "file",
                        "options": {
                            "path": "examples/functional.c"
                        },
                        "slug": "functional"
                    },
                    {
                        "name": "Hello",
                        "type": "file",
                        "options": {
                            "path": "examples/hello.c"
                        },
                        "slug": "hello"
                    },
                    {
                        "name": "Hierarchy",
                        "type": "file",
                        "options": {
                            "path": "examples/hierarchy.xml"
                        },
                        "slug": "hierarchy"
                    },
                    {
                        "name": "Iterate",
                        "type": "file",
                        "options": {
                            "path": "examples/iterate.c"
                        },
                        "slug": "iterate"
                    },
                    {
                        "name": "Kdbget",
                        "type": "file",
                        "options": {
                            "path": "examples/kdbget.c"
                        },
                        "slug": "kdbget"
                    },
                    {
                        "name": "Kdbget_error",
                        "type": "file",
                        "options": {
                            "path": "examples/kdbget_error.c"
                        },
                        "slug": "kdbget_error"
                    },
                    {
                        "name": "Kdbintro",
                        "type": "file",
                        "options": {
                            "path": "examples/kdbintro.c"
                        },
                        "slug": "kdbintro"
                    },
                    {
                        "name": "Kdbopen",
                        "type": "file",
                        "options": {
                            "path": "examples/kdbopen.c"
                        },
                        "slug": "kdbopen"
                    },
                    {
                        "name": "Kdbset",
                        "type": "file",
                        "options": {
                            "path": "examples/kdbset.c"
                        },
                        "slug": "kdbset"
                    },
                    {
                        "name": "KeyCopy",
                        "type": "file",
                        "options": {
                            "path": "examples/keyCopy.c"
                        },
                        "slug": "keycopy"
                    },
                    {
                        "name": "KeyMeta",
                        "type": "file",
                        "options": {
                            "path": "examples/keyMeta.c"
                        },
                        "slug": "keymeta"
                    },
                    {
                        "name": "KeyName",
                        "type": "file",
                        "options": {
                            "path": "examples/keyName.c"
                        },
                        "slug": "keyname"
                    },
                    {
                        "name": "KeyNew",
                        "type": "file",
                        "options": {
                            "path": "examples/keyNew.c"
                        },
                        "slug": "keynew"
                    },
                    {
                        "name": "KeyNewExample",
                        "type": "file",
                        "options": {
                            "path": "examples/keyNewExample.c"
                        },
                        "slug": "keynewexample"
                    },
                    {
                        "name": "Keyset",
                        "type": "file",
                        "options": {
                            "path": "examples/keyset.c"
                        },
                        "slug": "keyset"
                    },
                    {
                        "name": "Keyset",
                        "type": "file",
                        "options": {
                            "path": "examples/keyset.xml"
                        },
                        "slug": "keyset"
                    },
                    {
                        "name": "KsLookupPop",
                        "type": "file",
                        "options": {
                            "path": "examples/ksLookupPop.c"
                        },
                        "slug": "kslookuppop"
                    },
                    {
                        "name": "KsNew",
                        "type": "file",
                        "options": {
                            "path": "examples/ksNew.c"
                        },
                        "slug": "ksnew"
                    },
                    {
                        "name": "KsNewExample",
                        "type": "file",
                        "options": {
                            "path": "examples/ksNewExample.c"
                        },
                        "slug": "ksnewexample"
                    },
                    {
                        "name": "Meta",
                        "type": "file",
                        "options": {
                            "path": "examples/meta.c"
                        },
                        "slug": "meta"
                    },
                    {
                        "name": "Namespace",
                        "type": "file",
                        "options": {
                            "path": "examples/namespace.c"
                        },
                        "slug": "namespace"
                    },
                    {
                        "name": "Reference",
                        "type": "file",
                        "options": {
                            "path": "examples/reference.c"
                        },
                        "slug": "reference"
                    },
                    {
                        "name": "Set",
                        "type": "file",
                        "options": {
                            "path": "examples/set.c"
                        },
                        "slug": "set"
                    }
                ]
            },
            {
                "name": "Bindings",
                "type": "listfiles",
                "ref": "bindings",
                "children": [
                    {
                        "name": "README",
                        "type": "file",
                        "options": {
                            "path": "src/bindings/README.md"
                        },
                        "slug": "readme"
                    },
                    {
                        "name": "cpp",
                        "type": "file",
                        "options": {
                            "path": "src/bindings/cpp/README.md"
                        },
                        "slug": "cpp"
                    },
                    {
                        "name": "jna",
                        "type": "file",
                        "options": {
                            "path": "src/bindings/jna/README.md"
                        },
                        "slug": "jna"
                    }
                ]
            },
            {
                "name": "Libraries",
                "type": "listfiles",
                "ref": "libraries",
                "children": [
                    {
                        "name": "README",
                        "type": "file",
                        "options": {
                            "path": "src/libs/README.md"
                        },
                        "slug": "readme"
                    }
                ]
            },
            {
                "name": "Decisions",
                "type": "listfiles",
                "ref": "decisions",
                "children": [
                    {
                        "name": "README",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/README.md"
                        },
                        "slug": "readme"
                    },
                    {
                        "name": "Api_documentation",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/api_documentation.md"
                        },
                        "slug": "api_documentation"
                    },
                    {
                        "name": "Bool",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/bool.md"
                        },
                        "slug": "bool"
                    },
                    {
                        "name": "Bootstrap",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/bootstrap.md"
                        },
                        "slug": "bootstrap"
                    },
                    {
                        "name": "Capabilities",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/capabilities.md"
                        },
                        "slug": "capabilities"
                    },
                    {
                        "name": "Cmake_plugins",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/cmake_plugins.md"
                        },
                        "slug": "cmake_plugins"
                    },
                    {
                        "name": "Cmake_spec",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/cmake_spec.md"
                        },
                        "slug": "cmake_spec"
                    },
                    {
                        "name": "Cryptograhic_key_handling",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/cryptograhic_key_handling.md"
                        },
                        "slug": "cryptograhic_key_handling"
                    },
                    {
                        "name": "Empty_files",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/empty_files.md"
                        },
                        "slug": "empty_files"
                    },
                    {
                        "name": "Global_plugins",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/global_plugins.md"
                        },
                        "slug": "global_plugins"
                    },
                    {
                        "name": "Global_validation",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/global_validation.md"
                        },
                        "slug": "global_validation"
                    },
                    {
                        "name": "Holes",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/holes.md"
                        },
                        "slug": "holes"
                    },
                    {
                        "name": "Internal_cache",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/internal_cache.md"
                        },
                        "slug": "internal_cache"
                    },
                    {
                        "name": "Library_split",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/library_split.md"
                        },
                        "slug": "library_split"
                    },
                    {
                        "name": "Logging",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/logging.md"
                        },
                        "slug": "logging"
                    },
                    {
                        "name": "Null_pointer_checks",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/null_pointer_checks.md"
                        },
                        "slug": "null_pointer_checks"
                    },
                    {
                        "name": "Pubsub",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/pubsub.md"
                        },
                        "slug": "pubsub"
                    },
                    {
                        "name": "Relative",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/relative.md"
                        },
                        "slug": "relative"
                    },
                    {
                        "name": "Script_testing",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/script_testing.md"
                        },
                        "slug": "script_testing"
                    },
                    {
                        "name": "Specification",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/specification.md"
                        },
                        "slug": "specification"
                    },
                    {
                        "name": "Template",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/template.md"
                        },
                        "slug": "template"
                    },
                    {
                        "name": "Unit_testing",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/unit_testing.md"
                        },
                        "slug": "unit_testing"
                    },
                    {
                        "name": "Vendor_spec",
                        "type": "file",
                        "options": {
                            "path": "doc/decisions/vendor_spec.md"
                        },
                        "slug": "vendor_spec"
                    }
                ]
            },
            {
                "name": "Build Server",
                "type": "link",
                "ref": "buildserver",
                "options": {
                    "path": "http://build.libelektra.org:8080/"
                }
            },
            {
                "name": "API Documentation",
                "type": "link",
                "ref": "apidocumentation",
                "options": {
                    "path": "http://doc.libelektra.org/api/latest/html/"
                }
            },
            {
                "name": "GitHub",
                "type": "link",
                "ref": "github",
                "options": {
                    "path": "http://git.libelektra.org"
                }
            }
        ]
    }
])
	   .config(require('./auth'))
	   .config(require('./breadcrumbs'))
	   .config(require('./http'))
	   .config(require('./marked'))
	   .config(require('./notifications'))
	   .config(require('./routes'))
	   .config(require('./translations'));