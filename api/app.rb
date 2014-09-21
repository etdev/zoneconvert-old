require 'sinatra'
require 'json'
require 'yaml'
require 'curb'

class ZonesAPI < Sinatra::Base
  get '/' do
    data = symbolize_keys(YAML.load_file('geocode.yaml'))
    url = build_url(data[:base_url], data[:api_key], escape_HTML("Lancaster, PA"))
    response = get_response(url)
    puts response.body
  end

  def symbolize_keys(my_hash)
    Hash[my_hash.map{|(k,v)| [k.to_sym,v]}]
  end

  def get_response(url)
    Curl.get(url)
  end

  def escape_HTML(str)
    CGI.escape(str)
  end

  def build_url(base_url, api_key, location)
    "#{base_url}?key=#{api_key}&location=#{location}"
  end
end


