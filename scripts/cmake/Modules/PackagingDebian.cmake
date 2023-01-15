# ~~~
# In this file CPACK_DEBIAN_* vars necessary by CPack DEB
# to generate DEB packages are set. Also DEB package specifc
# files are installed.
# ~~~

set (CPACK_DEBIAN_PACKAGE_VERSION "${PROJECT_VERSION}")
set (CPACK_DEBIAN_PACKAGE_RELEASE "${CPACK_PACKAGE_RELEASE}")
set (DEBIAN_VERSION_RELEASE "${CPACK_DEBIAN_PACKAGE_VERSION}-${CPACK_DEBIAN_PACKAGE_RELEASE}")
set (CPACK_DEBIAN_PACKAGE_MAINTAINER "Robert Sowula <robert@sowula.at>")

set (CPACK_GENERATOR "DEB")
set (CPACK_DEBIAN_PACKAGE_PRIORITY "optional")
set (CPACK_DEBIAN_PACKAGE_SOURCE "elektra")
set (CPACK_DEBIAN_FILE_NAME DEB-DEFAULT)

set (CPACK_DEB_COMPONENT_INSTALL "ON")
set (CPACK_DEB_PACKAGE_COMPONENT "ON")
set (CPACK_DEBIAN_ENABLE_COMPONENT_DEPENDS "ON")
set (CPACK_DEBIAN_PACKAGE_SHLIBDEPS "ON")
set (CPACK_DEBIAN_PACKAGE_GENERATE_SHLIBS "ON")
set (CPACK_DEBIAN_PACKAGE_GENERATE_SHLIBS_POLICY ">=")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_PACKAGE_DEPENDS "netbase")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_PACKAGE_BREAKS "elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelektra-core4, libelektra-full4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_PACKAGE_CONFLICTS "libelektra4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_PACKAGE_REPLACES
     "libelektra4, elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelelektra-core4, libelektra-full4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_PACKAGE_SUGGESTS "elektra-doc, ${ALL_PLUGINS_STR}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-FULL_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_PACKAGE_BREAKS
     "elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelektra-core4, libelektra-full4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_PACKAGE_CONFLICTS "libelektra4-full")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_PACKAGE_REPLACES
     "libelektra4-full, elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelelektra-core4, libelektra-full4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_PACKAGE_CONFLICTS
     "libelektra4, libelektra${SO_VERSION} (<< ${CPACK_DEBIAN_PACKAGE_VERSION}), elektra-tests (<< ${CPACK_DEBIAN_PACKAGE_VERSION})")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_PACKAGE_SUGGESTS "elektra-doc, ${ALL_PLUGINS_STR}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FULL_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_PACKAGE_BREAKS "elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelektra-core4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_PACKAGE_CONFLICTS "libelektra4-experimental")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_PACKAGE_REPLACES
     "libelektra4-experimental, elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelelektra-core4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_PACKAGE_SUGGESTS "elektra-doc, ${ALL_PLUGINS_STR}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXPERIMENTAL_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXTRA_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-EXTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXTRA_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXTRA_PACKAGE_BREAKS "elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelektra-core4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXTRA_PACKAGE_CONFLICTS "libelektra4-extra")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXTRA_PACKAGE_REPLACES
     "libelektra4-extra, elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelelektra-core4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXTRA_PACKAGE_SUGGESTS "elektra-doc, ${ALL_PLUGINS_STR}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-EXTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_ELEKTRA-BIN_PACKAGE_NAME "${CPACK_COMPONENT_ELEKTRA-BIN_DISPLAY_NAME}")
set (CPACK_DEBIAN_ELEKTRA-BIN_PACKAGE_SECTION "misc")
set (CPACK_DEBIAN_ELEKTRA-BIN_PACKAGE_BREAKS "elektra-bin (<< ${DEBIAN_VERSION_RELEASE}),libelektra-full4")
set (CPACK_DEBIAN_ELEKTRA-BIN_PACKAGE_REPLACES "elektra-bin (<< ${DEBIAN_VERSION_RELEASE}), libelektra-full4")
set (CPACK_DEBIAN_ELEKTRA-BIN_PACKAGE_CONFLICTS "kernel-patch-kdb")
set (CPACK_DEBIAN_ELEKTRA-BIN_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-AUGEAS_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-AUGEAS_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-AUGEAS_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-AUGEAS_PACKAGE_BREAKS "libelektra-augeas4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-AUGEAS_PACKAGE_CONFLICTS "libelektra4-augeas")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-AUGEAS_PACKAGE_REPLACES "libelektra4-augeas, libelektra-augeas4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-AUGEAS_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-DBUS_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-DBUS_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-DBUS_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-DBUS_PACKAGE_BREAKS "libelektra-dbus4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-DBUS_PACKAGE_CONFLICTS "libelektra4-dbus")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-DBUS_PACKAGE_REPLACES "libelektra4-dbus, libelektra-dbus4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-DBUS_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA-DEV_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA-DEV_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA-DEV_PACKAGE_SECTION "libdevel")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ZEROMQ_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-ZEROMQ_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ZEROMQ_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ZEROMQ_PACKAGE_CONFLICTS "libelektra4-zeromq")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ZEROMQ_PACKAGE_REPLACES "libelektra4-zeromq")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ZEROMQ_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XMLTOOL_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-XMLTOOL_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XMLTOOL_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XMLTOOL_PACKAGE_BREAKS "libelektra-xmltool4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XMLTOOL_PACKAGE_CONFLICTS "libelektra4-xmltool")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XMLTOOL_PACKAGE_REPLACES "libelektra4-xmltool, libelektra-xmltool4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XMLTOOL_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XERCES_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-XERCES_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XERCES_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XERCES_PACKAGE_BREAKS "libelektra-xerces4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XERCES_PACKAGE_CONFLICTS "libelektra4-xerces")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XERCES_PACKAGE_REPLACES "libelektra4-xerces, libelektra-xerces4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-XERCES_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FUSE_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-FUSE_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FUSE_PACKAGE_SECTION "misc")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FUSE_PACKAGE_DEPENDS "python3 (>= 3.6), fuse")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-FUSE_DEBUGINFO_PACKAGE "OFF")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAJL_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-YAJL_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAJL_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAJL_PACKAGE_BREAKS "libelektra-yajl4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAJL_PACKAGE_CONFLICTS "libelektra4-yajl")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAJL_PACKAGE_REPLACES "libelektra4-yajl, libelektra-yajl4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAJL_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CRYPTO_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-CRYPTO_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CRYPTO_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CRYPTO_PACKAGE_CONFLICTS "libelektra4-crypto")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CRYPTO_PACKAGE_REPLACES "libelektra4-crypto")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CRYPTO_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CURL_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-CURL_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CURL_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CURL_PACKAGE_CONFLICTS "libelektra4-curl")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CURL_PACKAGE_REPLACES "libelektra4-curl")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-CURL_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JOURNALD_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-JOURNALD_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JOURNALD_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JOURNALD_PACKAGE_CONFLICTS "libelektra4-journald")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JOURNALD_PACKAGE_REPLACES "libelektra4-journald")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JOURNALD_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-GITRESOLVER_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-GITRESOLVER_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-GITRESOLVER_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-GITRESOLVER_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAMLCPP_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-YAMLCPP_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAMLCPP_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAMLCPP_PACKAGE_CONFLICTS "libelektra4-yamlcpp")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAMLCPP_PACKAGE_REPLACES "libelektra4-yamlcpp")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-YAMLCPP_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-LUA_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-LUA_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-LUA_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-LUA_PACKAGE_CONFLICTS "libelektra4-lua")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-LUA_PACKAGE_REPLACES "libelektra4-lua")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-LUA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JAVA_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-JAVA_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JAVA_PACKAGE_DEPENDS "default-jdk")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JAVA_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JAVA_PACKAGE_CONFLICTS "libelektra4-java")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JAVA_PACKAGE_REPLACES "libelektra4-java")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-JAVA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_JAVA-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_JAVA-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_JAVA-ELEKTRA_PACKAGE_DEPENDS "default-jdk")
set (CPACK_DEBIAN_JAVA-ELEKTRA_PACKAGE_SECTION "java")

set (CPACK_DEBIAN_LUA-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_LUA-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_LUA-ELEKTRA_PACKAGE_SECTION "interpreters")
set (CPACK_DEBIAN_LUA-ELEKTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_PYTHON3-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_PYTHON3-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_PYTHON3-ELEKTRA_PACKAGE_DEPENDS "python3")
set (CPACK_DEBIAN_PYTHON3-ELEKTRA_PACKAGE_SECTION "python")
set (CPACK_DEBIAN_PYTHON3-ELEKTRA_PACKAGE_CONTROL_STRICT_PERMISSION TRUE)
file (GLOB CONTROL_FILES_PYTHON3-ELEKTRA "${CMAKE_SOURCE_DIR}/scripts/packaging/debian/control/python3-elektra/*")
file (COPY ${CONTROL_FILES_PYTHON3-ELEKTRA} DESTINATION "${CMAKE_BINARY_DIR}/scripts/packaging/debian/control/python3-elektra/")
file (GLOB CONTROL_FILES_PYTHON3-ELEKTRA_BINARY "${CMAKE_BINARY_DIR}/scripts/packaging/debian/control/python3-elektra/*")
set (CPACK_DEBIAN_PYTHON3-ELEKTRA_PACKAGE_CONTROL_EXTRA "${CONTROL_FILES_PYTHON3-ELEKTRA_BINARY}")
set (CPACK_DEBIAN_PYTHON3-ELEKTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-PYTHON_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-PYTHON_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-PYTHON_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-PYTHON_PACKAGE_BREAKS "libelelektra-python4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-PYTHON_PACKAGE_CONFLICTS "libelelektra4-python")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-PYTHON_PACKAGE_REPLACES "libelelektra4-python, libelelektra-python4")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-PYTHON_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_RUBY-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_RUBY-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_RUBY-ELEKTRA_PACKAGE_DEPENDS "ruby")
set (CPACK_DEBIAN_RUBY-ELEKTRA_PACKAGE_SECTION "ruby")
set (CPACK_DEBIAN_RUBY-ELEKTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")
set (CPACK_DEBIAN_RUBY-ELEKTRA_DEBUGINFO_PACKAGE "OFF")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-RUBY_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-RUBY_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-RUBY_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-RUBY_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_GLIB-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_GLIB-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_GLIB-ELEKTRA_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_GLIB-ELEKTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_IO-EV-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_IO-EV-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_IO-EV-ELEKTRA_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_IO-EV-ELEKTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_IO-GLIB-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_IO-GLIB-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_IO-GLIB-ELEKTRA_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_IO-GLIB-ELEKTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_IO-UV-ELEKTRA_PACKAGE_NAME "${CPACK_COMPONENT_IO-UV-ELEKTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_IO-UV-ELEKTRA_PACKAGE_SECTION "libs")
set (CPACK_DEBIAN_IO-UV-ELEKTRA_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_ELEKTRA-BIN-EXTRA_PACKAGE_NAME "${CPACK_COMPONENT_ELEKTRA-BIN-EXTRA_DISPLAY_NAME}")
set (CPACK_DEBIAN_ELEKTRA-BIN-EXTRA_PACKAGE_DEPENDS "python-all")
set (CPACK_DEBIAN_ELEKTRA-BIN-EXTRA_PACKAGE_SECTION "misc")
set (CPACK_DEBIAN_ELEKTRA-BIN-EXTRA_PACKAGE_CONFLICTS "${CPACK_COMPONENT_ELEKTRA-BIN_DISPLAY_NAME} (<< ${CPACK_DEBIAN_PACKAGE_VERSION})")
set (CPACK_DEBIAN_ELEKTRA-BIN-EXTRA_DEBUGINFO_PACKAGE "OFF")

set (CPACK_DEBIAN_ELEKTRA-QT-GUI_PACKAGE_NAME "${CPACK_COMPONENT_ELEKTRA-QT-GUI_DISPLAY_NAME}")
if ("${OS_DISTRIB}" MATCHES "Ubuntu20.04" OR ${OS_PRETTY_NAME} MATCHES ".*bullseye.*")
	# qml-module-qtquick-controls-styles-breeze not available on ubuntu focal and debian bullseye
	message (
		STATUS
			"Exclude debian package dependency qml-module-qtquick-controls-styles-breeze from elektra-qt-gui package because it is not available."
	)
	set (
		CPACK_DEBIAN_ELEKTRA-QT-GUI_PACKAGE_DEPENDS
		"qml-module-qtquick2, qml-module-qtquick-window2, qml-module-qtquick-dialogs, qml-module-qt-labs-folderlistmodel, qml-module-qt-labs-settings, qml-module-qtquick-controls"
	)
else ()
	set (
		CPACK_DEBIAN_ELEKTRA-QT-GUI_PACKAGE_DEPENDS
		"qml-module-qtquick2, qml-module-qtquick-window2, qml-module-qtquick-dialogs, qml-module-qt-labs-folderlistmodel, qml-module-qt-labs-settings, qml-module-qtquick-controls-styles-breeze"
	)
endif ()
set (CPACK_DEBIAN_ELEKTRA-QT-GUI_PACKAGE_SECTION "misc")
set (CPACK_DEBIAN_ELEKTRA-QT-GUI_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_ELEKTRA-TESTS_PACKAGE_NAME "${CPACK_COMPONENT_ELEKTRA-TESTS_DISPLAY_NAME}")
set (CPACK_DEBIAN_ELEKTRA-TESTS_PACKAGE_SECTION "misc")
set (CPACK_DEBIAN_ELEKTRA-TESTS_PACKAGE_PRIORITY "extra")
set (CPACK_DEBIAN_ELEKTRA-TESTS_PACKAGE_BREAKS
     "libelektra-test (<<${DEBIAN_VERSION_RELEASE}), libelektra-full4 (<< ${DEBIAN_VERSION_RELEASE})")
set (CPACK_DEBIAN_ELEKTRA-TESTS_PACKAGE_REPLACES
     "libelektra-test (<< ${DEBIAN_VERSION_RELEASE}), libelektra-full4 (<< ${DEBIAN_VERSION_RELEASE})")
set (CPACK_DEBIAN_ELEKTRA-TESTS_DEBUGINFO_PACKAGE "${PACKAGE_DEBUGINFO}")

set (CPACK_DEBIAN_ELEKTRA-DOC_PACKAGE_NAME "${CPACK_COMPONENT_ELEKTRA-DOC_DISPLAY_NAME}")
set (CPACK_DEBIAN_ELEKTRA-DOC_PACKAGE_ARCHITECTURE "all")
set (CPACK_DEBIAN_ELEKTRA-DOC_PACKAGE_SECTION "doc")
set (CPACK_DEBIAN_ELEKTRA-DOC_PACKAGE_BREAKS "libelektra-doc (<< ${DEBIAN_VERSION_RELEASE})")
set (CPACK_DEBIAN_ELEKTRA-DOC_PACKAGE_REPLACES "libelektra-doc (<< ${DEBIAN_VERSION_RELEASE})")
install (
	FILES "${CMAKE_SOURCE_DIR}/scripts/packaging/debian/doc-base/elektra-doc"
	COMPONENT elektra-doc
	DESTINATION ${TARGET_DOCUMENTATION_DOC-BASE_FOLDER})

set (CPACK_DEBIAN_ELEKTRA-DBG_PACKAGE_NAME "${CPACK_COMPONENT_ELEKTRA-DBG_DISPLAY_NAME}")
set (CPACK_DEBIAN_ELEKTRA-DBG_PACKAGE_DEPENDS "${DEBIAN_DBG_PACKAGE_NAMES_STR}")
set (CPACK_DEBIAN_ELEKTRA-DBG_PACKAGE_SECTION "debug")

set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ALL_PACKAGE_NAME "${CPACK_COMPONENT_LIBELEKTRA${SO_VERSION}-ALL_DISPLAY_NAME}")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ALL_PACKAGE_SECTION "misc")
set (
	CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ALL_PACKAGE_RECOMMENDS
	"${CPACK_DEBIAN_ELEKTRA-TESTS_PACKAGE_NAME}, ${CPACK_DEBIAN_ELEKTRA-DOC_PACKAGE_NAME}, ${CPACK_DEBIAN_ELEKTRA-DBG_PACKAGE_NAME}, ${CPACK_DEBIAN_LIBELEKTRA-DEV_PACKAGE_NAME}"
)
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ALL_PACKAGE_CONFLICTS "libelektra4-all")
set (CPACK_DEBIAN_LIBELEKTRA${SO_VERSION}-ALL_PACKAGE_REPLACES "libelektra4-all")

set (CPACK_DEBIAN_ELEKTRA-MISC_PACKAGE_NAME "${CPACK_COMPONENT_ELEKTRA-MISC_DISPLAY_NAME}")
set (CPACK_DEBIAN_ELEKTRA-MISC_PACKAGE_ARCHITECTURE "all")
set (CPACK_DEBIAN_ELEKTRA-MISC_PACKAGE_SECTION "misc")

# install copyright file
configure_file ("${CMAKE_SOURCE_DIR}/.reuse/dep5" "${CMAKE_BINARY_DIR}/doc/copyright" COPYONLY)
foreach (component ${PACKAGES})
	install (
		FILES "${CMAKE_BINARY_DIR}/doc/copyright"
		COMPONENT ${component}
		DESTINATION "share/doc/${component}/")
endforeach ()

# compress and install changelog
add_custom_command (
	OUTPUT "${CMAKE_CURRENT_BINARY_DIR}/changelog.Debian.gz"
	COMMAND gzip -cn9 "debian/changelog" > "${CMAKE_CURRENT_BINARY_DIR}/changelog.Debian.gz"
	WORKING_DIRECTORY "${CMAKE_SOURCE_DIR}/scripts/packaging"
	COMMENT "Compressing changelog")

add_custom_target (changelog ALL DEPENDS "${CMAKE_CURRENT_BINARY_DIR}/changelog.Debian.gz")

foreach (component ${PACKAGES})
	install (
		FILES "${CMAKE_CURRENT_BINARY_DIR}/changelog.Debian.gz"
		COMPONENT ${component}
		DESTINATION "share/doc/${component}/")
endforeach ()
