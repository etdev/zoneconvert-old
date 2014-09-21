require 'sinatra'
require 'net/http'
require 'uri'
require 'json'

class ZonesAPI < Sinatra::Base
  get '/' do
    response = Net::HTTP.get 'api.iqon.jp', '/'
    response
  end
end
