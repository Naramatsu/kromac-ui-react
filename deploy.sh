echo "Cleaning old build"
rm -rf build

echo "removing local changes"
git checkout .

git checkout main

echo "fetching updates"
git pull

echo "Installing dependencies..."
npm install

npm run build