/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{html,ts}"],
  theme: {
    fontFamily:{
      'Mem': ['Mem'],
      'Primary':['PixelPanel']
    },
    extend: {
      colors:{
        moon:{
          'primary': '#170c00',
          'secondary':'#080400',
          'textlight':'#b38509',
          'textlightselected':'#fabb0c',
          'primarylight':'#1e1530',
          'marineblue':'#308596',
          'marinebluelight':'#49c9e3',
          'pink':"#df87e0",
          'whitenew':'#e3d5af',
          'success':"#0ac228",
          'secondsuccess':'#149129',
          'red':'#ef4444'
        }
      }

    },
  },
  plugins: [],
}

