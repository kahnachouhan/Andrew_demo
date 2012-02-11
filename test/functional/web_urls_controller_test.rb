require 'test_helper'

class WebUrlsControllerTest < ActionController::TestCase
  setup do
    @web_url = web_urls(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:web_urls)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create web_url" do
    assert_difference('WebUrl.count') do
      post :create, :web_url => @web_url.attributes
    end

    assert_redirected_to web_url_path(assigns(:web_url))
  end

  test "should show web_url" do
    get :show, :id => @web_url.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @web_url.to_param
    assert_response :success
  end

  test "should update web_url" do
    put :update, :id => @web_url.to_param, :web_url => @web_url.attributes
    assert_redirected_to web_url_path(assigns(:web_url))
  end

  test "should destroy web_url" do
    assert_difference('WebUrl.count', -1) do
      delete :destroy, :id => @web_url.to_param
    end

    assert_redirected_to web_urls_path
  end
end
