module Jekyll

  class EditOrCreate < Generator
    def generate(site)
      puts 'Adding edit/create variables'

      site.collections.each do |name, collection|
        collection.docs.each do |document|
          document.data['edit_page_url'] = site.config['base_github_url'] + '/edit/master/' + document.relative_path
          document.data['new_page_url'] = site.config['base_github_url'] +'/new/master/' + File.dirname(document.relative_path)
        end
      end
    end
  end

end
