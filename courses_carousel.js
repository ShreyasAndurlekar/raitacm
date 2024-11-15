var slider = tns({
  "container": ".my-slider",
  "items":3,
  "loop":true,
  "speed": 300,
  "gutter": 15,
  "controls": false,
  "nav": false,
  "autoplay": true,
  "autoplayTimeout": 2000,
  "swipeAngle": false,
  "autoplayButtonOutput": false,
  "rewind": false,    
  "autoplayDirection": "backward",
  "responsive": {
    "0": {
      "items": 1,               // On mobile screens, show 1 item
    },
    "600": {
      "items": 2,               // On smaller screens, show 2 items
    },
    "1000": {
      "items": 3,               // On larger screens, show 3 items
    }
}
 }) 