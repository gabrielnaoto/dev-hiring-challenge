# == Schema Information
#
# Table name: organizations
#
#  id          :bigint           not null, primary key
#  avatar_url  :string
#  description :string
#  name        :string
#  slug        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class OrganizationTest < ActiveSupport::TestCase
  test "it fetches its name" do

  end
end
