set -x
rm -rf build
rm -rf dist
rm -rf slider_captcha.egg-info
python setup.py bdist_wheel --universal
set +x