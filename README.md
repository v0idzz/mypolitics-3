# myPolitics 3 Frontend

> Advanced political platform with quizzes, news, articles and more.

## Development
For now you can point your local instance to use our public API by applying this patch:
```diff
diff --git a/next.config.js b/next.config.js
index 090e6fc..667e2cf 100644
--- a/next.config.js
+++ b/next.config.js
@@ -39,7 +39,7 @@ const nextConfig = {
       ? [
           {
             source: "/api/:path*",
-            destination: "http://localhost:5000/:path*",
+            destination: "https://mypolitics.pl/api/:path*",
           },
         ]
       : [];
```
Then run:
```bash
$ yarn install
$ yarn dev
```

## Tech Stack

WIP

### License

Apache 2.0 with Commons Clause
