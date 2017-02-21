class RemoveNullConstraintFromProjectDescription < ActiveRecord::Migration[5.0]
  def change
    change_column_null :projects, :description, true
  end
end
