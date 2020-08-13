# lib/generators/component_generator.rb
class ComponentGenerator < Rails::Generators::Base
  argument :name, required: true, desc: "Component name, e.g: button"

  def create_svelte_file
    create_file "#{component_path}/#{component_name}.svelte" do
      <<~content
        <style>
          /* */
        </style>

        <!-- -->

        <script>
          //
        </script>
      content
    end
  end

  protected

  def component_name
    @component_name ||= name.underscore.dasherize
  end

  def component_path
    "frontend/components/#{component_name}"
  end
end
