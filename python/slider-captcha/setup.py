# -*- coding:utf-8 -*-
import os
from setuptools import find_packages
from setuptools import setup

with open('requirements.txt') as f:
    install_requires = f.readlines()

exclude_file_patterns = ["*.gif"]
version = {}
with open(os.path.join("slidercaptcha/version.py")) as fp:
    exec(fp.read(), version)

setup(
    name="slider-captcha",
    version=version["__version__"],
    description="",
    url="",
    author="yeying",
    install_requires=install_requires,
    packages=find_packages(where=".", exclude=exclude_file_patterns),
    package_data={"": ["*.so", "*.jar", "templates/**/*", "static/**/*"]},
    include_package_data=True,
    entry_points={
        "console_scripts": [

        ]
    },
)
