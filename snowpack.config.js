process.env.SNOWPACK_PUBLIC__DEV__ = true;
process.env.SNOWPACK_PUBLIC__BUILD__ = false;
process.env.SNOWPACK_PUBLIC__VERSION__ = '1.0.0';
process.env.SNOWPACK_PUBLIC__DEMO__ = false;
process.env.SNOWPACK_PUBLIC__BACKWARDS_COMPAT__ = false;
process.env.SNOWPACK_PUBLIC__STATIC_PATH__ = "/static/";


module.exports = {
  mount: {
    "src": "/src",
    "build-translations": "/build-translations",
    // "build-translations": "/build-translations",
  },

}


