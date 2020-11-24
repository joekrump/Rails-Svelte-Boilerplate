# Rails + Svelte Boilerplate

<img width="771" alt="App Screenshot" src="https://user-images.githubusercontent.com/3317231/100060108-f28a3480-2de0-11eb-9292-fe43e8a1dad5.png">

## Dependencies:

Ruby: `2.5.6`
Bundler: `2.1.4`

# Setup
1. Install rails dependencies: `bundle install`
2. Setup Database: `rake db:setup`
3. Install javascript dependencies: `yarn install`
4. Install [Overmind](https://github.com/DarthSim/overmind#installation)
5. Start the app by running `yarn start`

# Dev

- Quickly create new components by running `rails g component <component_name>`.
  - Render a component in a `.erb` file using the `component` method from `application_helper.rb`. Ex.
  ```ruby
  <%= component("Button", { }, { }, "I'm a Svelte component!") %>
  ```

# Credit

These articles have helped me out in getting this project configured:
1. https://blog.echobind.com/optimal-ruby-on-rails-setup-for-2020-db8ea2b2c798
2. https://evilmartians.com/chronicles/evil-front-part-1
3. https://blog.usejournal.com/getting-started-with-svelte-and-rails-6-d8384c80ad6c
