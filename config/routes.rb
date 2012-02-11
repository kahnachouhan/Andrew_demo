AndrewDemo::Application.routes.draw do
  resources :web_urls, :only=>[:new, :create]
  root :to => "web_urls#new"
end
