---
layout: doc
title: Mac OS X 10.8+
collection: build-from-source
category: build-from-source
key: mac
---


# Dependencies


* [cmake](http://www.cmake.org/cmake/resources/software.html) ~> 2.8.12.2
* [Qt](http://qt-project.org/downloads) ~> 5.2.0
* [glm](http://glm.g-truc.net/0.9.5/index.html) ~> 0.9.5.2
* [OpenSSL](https://www.openssl.org/related/binaries.html) ~> 1.0.1g
  * IMPORTANT: OpenSSL 1.0.1g is critical to avoid a security vulnerability.

## Linux only

* [freeglut](http://freeglut.sourceforge.net/) ~> 2.8.0
* [zLib](http://www.zlib.net/) ~> 1.2.8

## Windows only

* [GLEW](http://glew.sourceforge.net/) ~> 1.10.0
* [freeglut MSVC](http://www.transmissionzero.co.uk/software/freeglut-devel/) ~> 2.8.1
* [zLib](http://www.zlib.net/) ~> 1.2.8

# CMake


Hifi uses CMake to generate build files and project files for your platform.

## Qt

In order for CMake to find the Qt5 find modules, you will need to set an ENV variable pointing to your Qt installation.

For example, a Qt5 5.2.0 installation to `/usr/local/qt5` would require that `QT_CMAKE_PREFIX_PATH` be set with the following command. This can either be entered directly into your shell session before you build or in your shell profile (e.g.: ~/.bash_profile, ~/.bashrc, ~/.zshrc - this depends on your shell and environment).

The path it needs to be set to will depend on where and how Qt5 was installed. e.g.

    export QT_CMAKE_PREFIX_PATH=/usr/local/qt/5.2.0/clang_64/lib/cmake/
    export QT_CMAKE_PREFIX_PATH=/usr/local/Cellar/qt5/5.2.1/lib/cmake
    export QT_CMAKE_PREFIX_PATH=/usr/local/opt/qt5/lib/cmake

## Generating build files

Create a build directory in the root of your checkout and then run the CMake build from there. This will keep the rest of the directory clean.

    mkdir build
    cd build
    cmake ..

## Variables

Any variables that need to be set for CMake to find dependencies can be set as ENV variables in your shell profile, or passed directly to CMake with a `-D` flag appended to the `cmake ..` command.

For example, to pass the `QT_CMAKE_PREFIX_PATH` variable during build file generation:

    cmake .. -DQT_CMAKE_PREFIX_PATH=/usr/local/qt/5.2.1/lib/cmake

## Finding Dependencies

You can point our [Cmake find modules](cmake/modules/) to the correct version of dependencies by setting one of the three following variables to the location of the correct version of the dependency.

In the examples below the variable `$NAME` would be replaced by the name of the dependency in uppercase, and `$name` would be replaced by the name of the dependency in lowercase (ex: `OPENSSL_ROOT_DIR`, `openssl`).

* `$NAME_ROOT_DIR` - pass this variable to Cmake with the `-DNAME_ROOT_DIR=` flag when running Cmake to generate build files
* `$NAME_ROOT_DIR` - set this variable in your ENV
* `HIFI_LIB_DIR` - set this variable in your ENV to your High Fidelity lib folder, should contain a folder '$name'

# UNIX

In general, as long as external dependencies are placed in OS standard locations, CMake will successfully find them during its run. When possible, you may choose to install depencies from your package manager of choice, or from source.

## Linux

Should you choose not to install Qt5 via a package manager that handles dependencies for you, you may be missing some Qt5 dependencies. On Ubuntu, for example, the following additional packages are required:

    libasound2 libxmu-dev libxi-dev freeglut3-dev libasound2-dev libjack-dev

## OS X

### Package Managers

[Homebrew](http://brew.sh/) is an excellent package manager for OS X. It makes install of all hifi dependencies very simple.

```bash
brew tap highfidelity/homebrew-formulas
brew install cmake glm openssl
brew install highfidelity/formulas/qt5
brew link qt5 --force
```

We have a [homebrew formulas repository](https://github.com/highfidelity/homebrew-formulas) that you can use/tap to install some of the dependencies. In the code block above qt5 is installed from a formula in this repository.

*Our [qt5 homebrew formula](https://raw.github.com/highfidelity/homebrew-formulas/master/qt5.rb) is for a patched version of Qt 5.2.0 stable that removes wireless network scanning that can reduce real-time audio performance. We recommended you use this formula to install Qt.*

### Xcode

If Xcode is your editor of choice, you can ask CMake to generate Xcode project files instead of Unix Makefiles.

    cmake .. -GXcode

After running cmake, you will have the make files or Xcode project file necessary to build all of the components. Open the `hifi.xcodeproj` file, choose ALL_BUILD from the Product > Scheme menu (or target drop down), and click Run.

If the build completes successfully, you will have built targets for all components located in the `build/${target_name}/Debug` directories.



### Optional Components

#### QXmpp

You can find QXmpp [here](https://github.com/qxmpp-project/qxmpp). The inclusion of the QXmpp enables text chat in the Interface client.

OS X users who tap our [homebrew formulas repository](https://github.com/highfidelity/homebrew-formulas) can install QXmpp via homebrew - `brew install highfidelity/formulas/qxmpp`.

## Devices

You can support external input/output devices such as Leap Motion, Faceplus, Faceshift, PrioVR, MIDI, Razr Hydra and more by adding each individual SDK in the visible building path. Refer to the readme file available in each device folder in `interface/external` for the detailed explanation of the requirements to use the device.
