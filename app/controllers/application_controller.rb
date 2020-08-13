class ApplicationController < ActionController::Base
  # This is all there is:
  prepend_view_path Rails.root.join("frontend")
end
