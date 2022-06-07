class User < ApplicationRecord
  has_many :reviews
  has_many :transactions

  validates_presence_of :email
  validates_uniqueness_of :email
  validates :name, presence: true, length: { maximum: 50 }
  validates :password_digest, presence: true, length: { in: 6..20 }
  validates :birthday, presence: true

  private

  def validate_age
    if dob.present? && dob > 18.years.ago.to_i
      errors.add(:dob, "You should be over 18 years old.")
    end
  end
end
