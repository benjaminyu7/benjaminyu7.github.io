npm run build
rm -r ../../personalbrandapp/*
mv build/* ../../personalbrandapp
http-server ../..