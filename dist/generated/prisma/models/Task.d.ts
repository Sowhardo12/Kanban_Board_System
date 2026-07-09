import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskAvgAggregateOutputType = {
    position: number | null;
};
export type TaskSumAggregateOutputType = {
    position: number | null;
};
export type TaskMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    priority: string | null;
    dueDate: Date | null;
    position: number | null;
    assigneeId: string | null;
    columnId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type TaskMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    priority: string | null;
    dueDate: Date | null;
    position: number | null;
    assigneeId: string | null;
    columnId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    priority: number;
    dueDate: number;
    position: number;
    assigneeId: number;
    columnId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type TaskAvgAggregateInputType = {
    position?: true;
};
export type TaskSumAggregateInputType = {
    position?: true;
};
export type TaskMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    priority?: true;
    dueDate?: true;
    position?: true;
    assigneeId?: true;
    columnId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    priority?: true;
    dueDate?: true;
    position?: true;
    assigneeId?: true;
    columnId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    priority?: true;
    dueDate?: true;
    position?: true;
    assigneeId?: true;
    columnId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    priority: string;
    dueDate: Date | null;
    position: number;
    assigneeId: string | null;
    columnId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    priority?: Prisma.StringFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    position?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.StringNullableFilter<"Task"> | string | null;
    columnId?: Prisma.StringFilter<"Task"> | string;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    column?: Prisma.XOR<Prisma.ColumnScalarRelationFilter, Prisma.ColumnWhereInput>;
    labels?: Prisma.TaskLabelListRelationFilter;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignee?: Prisma.UserOrderByWithRelationInput;
    column?: Prisma.ColumnOrderByWithRelationInput;
    labels?: Prisma.TaskLabelOrderByRelationAggregateInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    priority?: Prisma.StringFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    position?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.StringNullableFilter<"Task"> | string | null;
    columnId?: Prisma.StringFilter<"Task"> | string;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    column?: Prisma.XOR<Prisma.ColumnScalarRelationFilter, Prisma.ColumnWhereInput>;
    labels?: Prisma.TaskLabelListRelationFilter;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _avg?: Prisma.TaskAvgOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
    _sum?: Prisma.TaskSumOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    priority?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
    position?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    assigneeId?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    columnId?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
};
export type TaskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    assignee?: Prisma.UserCreateNestedOneWithoutTasksInput;
    column: Prisma.ColumnCreateNestedOneWithoutTasksInput;
    labels?: Prisma.TaskLabelCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    assigneeId?: string | null;
    columnId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    labels?: Prisma.TaskLabelUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignee?: Prisma.UserUpdateOneWithoutTasksNestedInput;
    column?: Prisma.ColumnUpdateOneRequiredWithoutTasksNestedInput;
    labels?: Prisma.TaskLabelUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    columnId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labels?: Prisma.TaskLabelUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    assigneeId?: string | null;
    columnId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type TaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    columnId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type TaskAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type TaskSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type TaskScalarRelationFilter = {
    is?: Prisma.TaskWhereInput;
    isNot?: Prisma.TaskWhereInput;
};
export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutColumnInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutColumnInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutColumnNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput | Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput | Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutColumnInput | Prisma.TaskUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput | Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput | Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutColumnInput | Prisma.TaskUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type TaskCreateNestedOneWithoutLabelsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutLabelsInput, Prisma.TaskUncheckedCreateWithoutLabelsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutLabelsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutLabelsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutLabelsInput, Prisma.TaskUncheckedCreateWithoutLabelsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutLabelsInput;
    upsert?: Prisma.TaskUpsertWithoutLabelsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutLabelsInput, Prisma.TaskUpdateWithoutLabelsInput>, Prisma.TaskUncheckedUpdateWithoutLabelsInput>;
};
export type TaskCreateWithoutAssigneeInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    column: Prisma.ColumnCreateNestedOneWithoutTasksInput;
    labels?: Prisma.TaskLabelCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    columnId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    labels?: Prisma.TaskLabelUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskCreateManyAssigneeInputEnvelope = {
    data: Prisma.TaskCreateManyAssigneeInput | Prisma.TaskCreateManyAssigneeInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
};
export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutAssigneeInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    priority?: Prisma.StringFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    position?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.StringNullableFilter<"Task"> | string | null;
    columnId?: Prisma.StringFilter<"Task"> | string;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
};
export type TaskCreateWithoutColumnInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    assignee?: Prisma.UserCreateNestedOneWithoutTasksInput;
    labels?: Prisma.TaskLabelCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutColumnInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    assigneeId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    labels?: Prisma.TaskLabelUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutColumnInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput>;
};
export type TaskCreateManyColumnInputEnvelope = {
    data: Prisma.TaskCreateManyColumnInput | Prisma.TaskCreateManyColumnInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutColumnInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutColumnInput, Prisma.TaskUncheckedUpdateWithoutColumnInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput>;
};
export type TaskUpdateWithWhereUniqueWithoutColumnInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutColumnInput, Prisma.TaskUncheckedUpdateWithoutColumnInput>;
};
export type TaskUpdateManyWithWhereWithoutColumnInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutColumnInput>;
};
export type TaskCreateWithoutLabelsInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    assignee?: Prisma.UserCreateNestedOneWithoutTasksInput;
    column: Prisma.ColumnCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateWithoutLabelsInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    assigneeId?: string | null;
    columnId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type TaskCreateOrConnectWithoutLabelsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutLabelsInput, Prisma.TaskUncheckedCreateWithoutLabelsInput>;
};
export type TaskUpsertWithoutLabelsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutLabelsInput, Prisma.TaskUncheckedUpdateWithoutLabelsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutLabelsInput, Prisma.TaskUncheckedCreateWithoutLabelsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutLabelsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutLabelsInput, Prisma.TaskUncheckedUpdateWithoutLabelsInput>;
};
export type TaskUpdateWithoutLabelsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignee?: Prisma.UserUpdateOneWithoutTasksNestedInput;
    column?: Prisma.ColumnUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutLabelsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    columnId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskCreateManyAssigneeInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    columnId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type TaskUpdateWithoutAssigneeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    column?: Prisma.ColumnUpdateOneRequiredWithoutTasksNestedInput;
    labels?: Prisma.TaskLabelUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    columnId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labels?: Prisma.TaskLabelUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    columnId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskCreateManyColumnInput = {
    id?: string;
    title: string;
    description?: string | null;
    priority?: string;
    dueDate?: Date | string | null;
    position: number;
    assigneeId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type TaskUpdateWithoutColumnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignee?: Prisma.UserUpdateOneWithoutTasksNestedInput;
    labels?: Prisma.TaskLabelUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutColumnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    labels?: Prisma.TaskLabelUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateManyWithoutColumnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskCountOutputType = {
    labels: number;
};
export type TaskCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labels?: boolean | TaskCountOutputTypeCountLabelsArgs;
};
export type TaskCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCountOutputTypeSelect<ExtArgs> | null;
};
export type TaskCountOutputTypeCountLabelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskLabelWhereInput;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    position?: boolean;
    assigneeId?: boolean;
    columnId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
    labels?: boolean | Prisma.Task$labelsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    position?: boolean;
    assigneeId?: boolean;
    columnId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    position?: boolean;
    assigneeId?: boolean;
    columnId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    position?: boolean;
    assigneeId?: boolean;
    columnId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "priority" | "dueDate" | "position" | "assigneeId" | "columnId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
    labels?: boolean | Prisma.Task$labelsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        assignee: Prisma.$UserPayload<ExtArgs> | null;
        column: Prisma.$ColumnPayload<ExtArgs>;
        labels: Prisma.$TaskLabelPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        position: number;
        assigneeId: string | null;
        columnId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assignee<T extends Prisma.Task$assigneeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$assigneeArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    column<T extends Prisma.ColumnDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ColumnDefaultArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    labels<T extends Prisma.Task$labelsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$labelsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'String'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly priority: Prisma.FieldRef<"Task", 'String'>;
    readonly dueDate: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly position: Prisma.FieldRef<"Task", 'Int'>;
    readonly assigneeId: Prisma.FieldRef<"Task", 'String'>;
    readonly columnId: Prisma.FieldRef<"Task", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
    include?: Prisma.TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$assigneeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Task$labelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
    where?: Prisma.TaskLabelWhereInput;
    orderBy?: Prisma.TaskLabelOrderByWithRelationInput | Prisma.TaskLabelOrderByWithRelationInput[];
    cursor?: Prisma.TaskLabelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskLabelScalarFieldEnum | Prisma.TaskLabelScalarFieldEnum[];
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
