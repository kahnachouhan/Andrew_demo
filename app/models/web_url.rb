class WebUrl < ActiveRecord::Base

  validates_url_format_of :url,
                          :allow_nil => true,
                          :message => 'is completely unacceptable'

  def url_domain
    url_domain = url.to_s.split('//')
    (url_domain[1] || url_domain[0]).gsub("www.","").split('/')[0]
  end

end
