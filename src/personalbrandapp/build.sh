npm run build
rm -r ../../personalbrandapp/*
mv build/index.html ../..
mv build/* ../../personalbrandapp
python3 -m http.server 8000 --directory ../..