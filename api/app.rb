require 'sinatra'
require 'sinatra/cross_origin'
require 'yaml'
require 'curb'
require 'json'

class ZonesAPI < Sinatra::Base
  get '/' do
    data = symbolize_keys(YAML.load_file('geocode.yaml'))
    url = build_url(data[:base_url], data[:api_key], escape_HTML("Lancaster, PA"))
    response = get_response(url)["results"][0]["locations"][0]
    puts response.to_yaml
    return_json = process_json(response)
    puts return_json
  end

  def symbolize_keys(my_hash)
    Hash[my_hash.map{|(k,v)| [k.to_sym,v]}]
  end

  def get_response(url)
    curl = Curl::Easy.new(url)
    curl.perform
    JSON.parse(curl.body_str)
  end

  def escape_HTML(str)
    CGI.escape(str)
  end

  def build_url(base_url, api_key, location)
    "#{base_url}?key=#{api_key}&location=#{location}"
  end

  def process_json(data)

   street = data["street"]
   adminArea6 = data["adminArea6"]
   adminArea6Type = data["adminArea6Type"]
   adminArea5 = data["adminArea5"]
   adminArea5Type = data["adminArea5Type"]
   adminArea4 = data["adminArea4"]
   adminArea4Type = data["adminArea4Type"]
   adminArea3 = data["adminArea3"]
   adminArea3Type = data["adminArea3Type"]
   adminArea2 = data["adminArea2"]
   adminArea2Type = data["adminArea2Type"]
   adminArea1 = data["adminArea1"]
   adminArea1Type = data["adminArea1Type"]
   postalCode = data["postalCode"]
   geocodeQualityCode = data["geocodeQualityCode"]
   geocodeQuality = data["geocodeQuality"]
   dragPoint = data["dragPoint"]
   sideOfStreet = data["sideOfStreet"]
   linkId = data["linkId"]
   unknownInput = data["unknownInput"]
   type = data["type"]
   lat = data["latLng"]["lat"]
   lng = data["latLng"]["lng"]
   disp_lat = data["displayLatLng"]["lat"]
   disp_lng = data["displayLatLng"]["lng"]

   { id: 1, street: street, adminArea6: adminArea6, adminArea6Type: adminArea6Type, adminArea5: adminArea5, adminArea5Type: adminArea5Type, adminArea4: adminArea4, adminArea4Type: adminArea4Type, adminArea3: adminArea3, adminArea3Type: adminArea3Type, adminArea2: adminArea2, adminArea2Type: adminArea2Type, adminArea1: adminArea1, adminArea1Type: adminArea1Type, postalCode: postalCode, geocodeQualityCode: geocodeQualityCode, geocodeQuality: geocodeQuality, dragPoint: dragPoint, sideOfStreet: sideOfStreet, linkId: linkId, unknownInput: unknownInput, type: type, lat: lat, lng: lng, disp_lat: disp_lat, disp_lng: disp_lng  }

  end

end

