shared_library(
    'minihook',
    name_prefix : '',
    include_directories: inc,
    implicit_include_directories : false,
    c_pch : '../precompiled.h',
    dependencies : [
        capnhook.get_variable('hook_dep'),
    ],
    link_with : [
        amex_lib,
        hooklib_lib,
        platform_lib,
        util_lib,
    ],
    sources : [
        'dllmain.c',
    ],
)
