class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
  end

  def upload
    render json: { message: 'File Uploaded!' }
  end
end
