# lib/generators/component_generator.rb
class ComponentGenerator < Rails::Generators::Base
  argument :name, required: true, desc: "Component name, e.g: button"

  def create_svelte_file
    create_file component_path do
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

    inject_into_file 'frontend/packs/application.js', after: "import WebpackerSvelte from \"@coding-g/webpacker-svelte\";\n" do
      <<~content
        import #{component_import_name} from "#{component_application_import_path}";
      content
    end

    inject_into_file 'frontend/packs/application.js', after: "WebpackerSvelte.setup({\n" do
      "  #{component_import_name},\n"
    end
  end

  protected

  def component_name
    @component_name ||= name.underscore.dasherize
  end

  def component_import_name
    import_name = ""
    name_parts = component_name.split("-")
    name_parts.each do |part|
      import_name << part.capitalize
    end
    import_name
  end

  def component_application_import_path
    "../components/#{component_name}/#{component_name}.svelte"
  end

  def components_root_path
    "frontend/components"
  end

  def component_path
    "#{components_root_path}/#{component_name}/#{component_name}.svelte"
  end
end
