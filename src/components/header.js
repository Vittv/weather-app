// Pseudocode for planning the layout
import { WEATHER_ICONS } from "../assets/icons/icons";

headerProperties =
{
  city: "Paris",
  temp: 23,
  condition: "Sunny",
  icon: WEATHER_ICONS.SUN,
  feels_like: 25,
  high_low: {
    high: 26,
    low: 18
  }
}

// Visual layout would be something like
headerHTML =
`
[City Name] (space-between) [Last Updated]
[Weather Icon] [Current Temp] [Condition]
"Feels like [X]"
H: [Y] L: [Z]
`

// Then we can jump into something more complex about today specifically
// Add a whole section with more information about the current day

// Finally we can have a 10 day forecast
// Footer, credits - should probably credit the icons and the API used

// End

// Probably making the entire layout with flexbox, using flex-wrap: wrap for the majority of things
// But for some of them I'd like to have some nice grids, maybe?
// I'd rather have a good mobile experience more than anything, since a weather app seems more useful there than on a computer
// Could have the body {background-color: } to change based on the person's current timezone, and make it dark / bright depending whether it's day or night for them
// This will also demand the icons to change color for proper contrast, which is okay
// Make the hourly forecast highlight the current hour for the user

// So far we got the API fetching working, the search bar is functional
// I'm sure there will be some bugs here and here or QoL things we can implement soon
// Mostly we just need to use the data to build the UI now