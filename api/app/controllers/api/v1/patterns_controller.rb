module Api
  module V1
    # PatternsController handles the API requests for managing pattern resources.
    #
    # Endpoints:
    # - GET /api/v1/patterns: Returns a list of all patterns
    # - POST /api/v1/patterns: Creates a new pattern with the provided parameters (name, author, description).
    # - DELETE /api/v1/patterns/:id: Deletes the pattern with the specified ID.
    class PatternsController < ApplicationController
      # GET /api/v1/patterns
      def index
        render json: Pattern.all
      end

      def create
        pattern = Pattern.create(pattern_params)
        render json: pattern
      end

      def destroy
        Pattern.destroy(params[:id])
      end

      private

      def pattern_params
        params.require(:pattern).permit(:name, :author, :description)
      end
    end
  end
end
