class RemoveNullConstraintFromInstructionDetail < ActiveRecord::Migration[5.0]
  def change
    change_column_null :instructions, :step_detail, true
  end
end
