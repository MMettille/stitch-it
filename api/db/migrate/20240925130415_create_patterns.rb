class CreatePatterns < ActiveRecord::Migration[7.1]
  def change
    create_table :patterns, id: :integer do |t|
      t.string :name, null: false
      t.string :author
      t.text :description
      t.timestamps
    end
  end
end
