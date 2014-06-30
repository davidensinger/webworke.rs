module Jekyll

  class CategoryGenerator < Generator

    safe true

    def generate(site)
      site.categories.each do |category|
        build_subpages(site, "category", category)
      end
    end

    def build_subpages(site, type, posts)
      posts[1] = posts[1].sort_by { |p| -p.date.to_f }
      atomize(site, type, posts)
    end

    def atomize(site, type, posts)
      path = "/#{type}/#{posts[0]}".downcase.strip.gsub(' ', '-')
      atom = AtomPage.new(site, site.source, path, type, posts[0], posts[1])
      site.pages << atom
    end
  end

  class GroupSubPage < Page
    def initialize(site, base, dir, type, val)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), "category-index.html")
      self.data["grouptype"] = type
      self.data[type] = val
    end
  end

  class AtomPage < Page
    def initialize(site, base, dir, type, val, posts)
      @site = site
      @base = base
      @dir = dir
      @name = 'feed.xml'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), "category-feed.xml")
      self.data[type] = val
      self.data["grouptype"] = type
      self.data["posts"] = posts[0..9]
    end
  end
end
