set -e

rm -rf ./docs

npx react-scripts build

mv build/ docs/
