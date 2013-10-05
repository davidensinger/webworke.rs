module WebworkersFilters
   def titlecase(input)
     input.titlecase
   end
end
Liquid::Template.register_filter WebworkersFilters
