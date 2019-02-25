set -e

rm -rf ./docs

npx react-scripts build

mv build/ docs/

cp src/face.69232788.jpg docs/face.69232788.jpg
