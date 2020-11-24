// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import WebpackerSvelte from "@coding-g/webpacker-svelte";
import Button from "../components/button/button-indigo.svelte";
import AvatarImage from "../components/avatar-image/avatar-image.svelte";
import "../styles/application.pcss";

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

// Turbolinks must be loaded before calling this.
// > require("turbolinks").start();

// Add components here that you want to be able to render using application_helper.rb#component
// Ex. <%= component("Button", {}, {}) -%>
WebpackerSvelte.setup({
  Button,
  AvatarImage,
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
