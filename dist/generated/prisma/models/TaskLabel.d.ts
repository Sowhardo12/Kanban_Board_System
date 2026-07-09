import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TaskLabelModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskLabelPayload>;
export type AggregateTaskLabel = {
    _count: TaskLabelCountAggregateOutputType | null;
    _min: TaskLabelMinAggregateOutputType | null;
    _max: TaskLabelMaxAggregateOutputType | null;
};
export type TaskLabelMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    color: string | null;
    taskId: string | null;
};
export type TaskLabelMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    color: string | null;
    taskId: string | null;
};
export type TaskLabelCountAggregateOutputType = {
    id: number;
    name: number;
    color: number;
    taskId: number;
    _all: number;
};
export type TaskLabelMinAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    taskId?: true;
};
export type TaskLabelMaxAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    taskId?: true;
};
export type TaskLabelCountAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    taskId?: true;
    _all?: true;
};
export type TaskLabelAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskLabelWhereInput;
    orderBy?: Prisma.TaskLabelOrderByWithRelationInput | Prisma.TaskLabelOrderByWithRelationInput[];
    cursor?: Prisma.TaskLabelWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskLabelCountAggregateInputType;
    _min?: TaskLabelMinAggregateInputType;
    _max?: TaskLabelMaxAggregateInputType;
};
export type GetTaskLabelAggregateType<T extends TaskLabelAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskLabel]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskLabel[P]> : Prisma.GetScalarType<T[P], AggregateTaskLabel[P]>;
};
export type TaskLabelGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskLabelWhereInput;
    orderBy?: Prisma.TaskLabelOrderByWithAggregationInput | Prisma.TaskLabelOrderByWithAggregationInput[];
    by: Prisma.TaskLabelScalarFieldEnum[] | Prisma.TaskLabelScalarFieldEnum;
    having?: Prisma.TaskLabelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskLabelCountAggregateInputType | true;
    _min?: TaskLabelMinAggregateInputType;
    _max?: TaskLabelMaxAggregateInputType;
};
export type TaskLabelGroupByOutputType = {
    id: string;
    name: string;
    color: string;
    taskId: string;
    _count: TaskLabelCountAggregateOutputType | null;
    _min: TaskLabelMinAggregateOutputType | null;
    _max: TaskLabelMaxAggregateOutputType | null;
};
export type GetTaskLabelGroupByPayload<T extends TaskLabelGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskLabelGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskLabelGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskLabelGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskLabelGroupByOutputType[P]>;
}>>;
export type TaskLabelWhereInput = {
    AND?: Prisma.TaskLabelWhereInput | Prisma.TaskLabelWhereInput[];
    OR?: Prisma.TaskLabelWhereInput[];
    NOT?: Prisma.TaskLabelWhereInput | Prisma.TaskLabelWhereInput[];
    id?: Prisma.StringFilter<"TaskLabel"> | string;
    name?: Prisma.StringFilter<"TaskLabel"> | string;
    color?: Prisma.StringFilter<"TaskLabel"> | string;
    taskId?: Prisma.StringFilter<"TaskLabel"> | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
};
export type TaskLabelOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    task?: Prisma.TaskOrderByWithRelationInput;
};
export type TaskLabelWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskLabelWhereInput | Prisma.TaskLabelWhereInput[];
    OR?: Prisma.TaskLabelWhereInput[];
    NOT?: Prisma.TaskLabelWhereInput | Prisma.TaskLabelWhereInput[];
    name?: Prisma.StringFilter<"TaskLabel"> | string;
    color?: Prisma.StringFilter<"TaskLabel"> | string;
    taskId?: Prisma.StringFilter<"TaskLabel"> | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
}, "id">;
export type TaskLabelOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    _count?: Prisma.TaskLabelCountOrderByAggregateInput;
    _max?: Prisma.TaskLabelMaxOrderByAggregateInput;
    _min?: Prisma.TaskLabelMinOrderByAggregateInput;
};
export type TaskLabelScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskLabelScalarWhereWithAggregatesInput | Prisma.TaskLabelScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskLabelScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskLabelScalarWhereWithAggregatesInput | Prisma.TaskLabelScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TaskLabel"> | string;
    name?: Prisma.StringWithAggregatesFilter<"TaskLabel"> | string;
    color?: Prisma.StringWithAggregatesFilter<"TaskLabel"> | string;
    taskId?: Prisma.StringWithAggregatesFilter<"TaskLabel"> | string;
};
export type TaskLabelCreateInput = {
    id?: string;
    name: string;
    color: string;
    task: Prisma.TaskCreateNestedOneWithoutLabelsInput;
};
export type TaskLabelUncheckedCreateInput = {
    id?: string;
    name: string;
    color: string;
    taskId: string;
};
export type TaskLabelUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutLabelsNestedInput;
};
export type TaskLabelUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TaskLabelCreateManyInput = {
    id?: string;
    name: string;
    color: string;
    taskId: string;
};
export type TaskLabelUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TaskLabelUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TaskLabelListRelationFilter = {
    every?: Prisma.TaskLabelWhereInput;
    some?: Prisma.TaskLabelWhereInput;
    none?: Prisma.TaskLabelWhereInput;
};
export type TaskLabelOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskLabelCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type TaskLabelMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type TaskLabelMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
};
export type TaskLabelCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskLabelCreateWithoutTaskInput, Prisma.TaskLabelUncheckedCreateWithoutTaskInput> | Prisma.TaskLabelCreateWithoutTaskInput[] | Prisma.TaskLabelUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskLabelCreateOrConnectWithoutTaskInput | Prisma.TaskLabelCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskLabelCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
};
export type TaskLabelUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskLabelCreateWithoutTaskInput, Prisma.TaskLabelUncheckedCreateWithoutTaskInput> | Prisma.TaskLabelCreateWithoutTaskInput[] | Prisma.TaskLabelUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskLabelCreateOrConnectWithoutTaskInput | Prisma.TaskLabelCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskLabelCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
};
export type TaskLabelUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskLabelCreateWithoutTaskInput, Prisma.TaskLabelUncheckedCreateWithoutTaskInput> | Prisma.TaskLabelCreateWithoutTaskInput[] | Prisma.TaskLabelUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskLabelCreateOrConnectWithoutTaskInput | Prisma.TaskLabelCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskLabelUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskLabelUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskLabelCreateManyTaskInputEnvelope;
    set?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    disconnect?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    delete?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    connect?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    update?: Prisma.TaskLabelUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskLabelUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskLabelUpdateManyWithWhereWithoutTaskInput | Prisma.TaskLabelUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskLabelScalarWhereInput | Prisma.TaskLabelScalarWhereInput[];
};
export type TaskLabelUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskLabelCreateWithoutTaskInput, Prisma.TaskLabelUncheckedCreateWithoutTaskInput> | Prisma.TaskLabelCreateWithoutTaskInput[] | Prisma.TaskLabelUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskLabelCreateOrConnectWithoutTaskInput | Prisma.TaskLabelCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskLabelUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskLabelUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskLabelCreateManyTaskInputEnvelope;
    set?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    disconnect?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    delete?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    connect?: Prisma.TaskLabelWhereUniqueInput | Prisma.TaskLabelWhereUniqueInput[];
    update?: Prisma.TaskLabelUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskLabelUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskLabelUpdateManyWithWhereWithoutTaskInput | Prisma.TaskLabelUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskLabelScalarWhereInput | Prisma.TaskLabelScalarWhereInput[];
};
export type TaskLabelCreateWithoutTaskInput = {
    id?: string;
    name: string;
    color: string;
};
export type TaskLabelUncheckedCreateWithoutTaskInput = {
    id?: string;
    name: string;
    color: string;
};
export type TaskLabelCreateOrConnectWithoutTaskInput = {
    where: Prisma.TaskLabelWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskLabelCreateWithoutTaskInput, Prisma.TaskLabelUncheckedCreateWithoutTaskInput>;
};
export type TaskLabelCreateManyTaskInputEnvelope = {
    data: Prisma.TaskLabelCreateManyTaskInput | Prisma.TaskLabelCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type TaskLabelUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskLabelWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskLabelUpdateWithoutTaskInput, Prisma.TaskLabelUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.TaskLabelCreateWithoutTaskInput, Prisma.TaskLabelUncheckedCreateWithoutTaskInput>;
};
export type TaskLabelUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskLabelWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskLabelUpdateWithoutTaskInput, Prisma.TaskLabelUncheckedUpdateWithoutTaskInput>;
};
export type TaskLabelUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.TaskLabelScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskLabelUpdateManyMutationInput, Prisma.TaskLabelUncheckedUpdateManyWithoutTaskInput>;
};
export type TaskLabelScalarWhereInput = {
    AND?: Prisma.TaskLabelScalarWhereInput | Prisma.TaskLabelScalarWhereInput[];
    OR?: Prisma.TaskLabelScalarWhereInput[];
    NOT?: Prisma.TaskLabelScalarWhereInput | Prisma.TaskLabelScalarWhereInput[];
    id?: Prisma.StringFilter<"TaskLabel"> | string;
    name?: Prisma.StringFilter<"TaskLabel"> | string;
    color?: Prisma.StringFilter<"TaskLabel"> | string;
    taskId?: Prisma.StringFilter<"TaskLabel"> | string;
};
export type TaskLabelCreateManyTaskInput = {
    id?: string;
    name: string;
    color: string;
};
export type TaskLabelUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TaskLabelUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TaskLabelUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TaskLabelSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    color?: boolean;
    taskId?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskLabel"]>;
export type TaskLabelSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    color?: boolean;
    taskId?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskLabel"]>;
export type TaskLabelSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    color?: boolean;
    taskId?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskLabel"]>;
export type TaskLabelSelectScalar = {
    id?: boolean;
    name?: boolean;
    color?: boolean;
    taskId?: boolean;
};
export type TaskLabelOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "color" | "taskId", ExtArgs["result"]["taskLabel"]>;
export type TaskLabelInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type TaskLabelIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type TaskLabelIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type $TaskLabelPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaskLabel";
    objects: {
        task: Prisma.$TaskPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        color: string;
        taskId: string;
    }, ExtArgs["result"]["taskLabel"]>;
    composites: {};
};
export type TaskLabelGetPayload<S extends boolean | null | undefined | TaskLabelDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload, S>;
export type TaskLabelCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskLabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskLabelCountAggregateInputType | true;
};
export interface TaskLabelDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaskLabel'];
        meta: {
            name: 'TaskLabel';
        };
    };
    findUnique<T extends TaskLabelFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskLabelFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskLabelFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskLabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskLabelFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskLabelFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskLabelFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskLabelFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskLabelFindManyArgs>(args?: Prisma.SelectSubset<T, TaskLabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskLabelCreateArgs>(args: Prisma.SelectSubset<T, TaskLabelCreateArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskLabelCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskLabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskLabelCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskLabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskLabelDeleteArgs>(args: Prisma.SelectSubset<T, TaskLabelDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskLabelUpdateArgs>(args: Prisma.SelectSubset<T, TaskLabelUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskLabelDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskLabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskLabelUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskLabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskLabelUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskLabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskLabelUpsertArgs>(args: Prisma.SelectSubset<T, TaskLabelUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskLabelClient<runtime.Types.Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskLabelCountArgs>(args?: Prisma.Subset<T, TaskLabelCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskLabelCountAggregateOutputType> : number>;
    aggregate<T extends TaskLabelAggregateArgs>(args: Prisma.Subset<T, TaskLabelAggregateArgs>): Prisma.PrismaPromise<GetTaskLabelAggregateType<T>>;
    groupBy<T extends TaskLabelGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskLabelGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskLabelGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskLabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskLabelFieldRefs;
}
export interface Prisma__TaskLabelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskLabelFieldRefs {
    readonly id: Prisma.FieldRef<"TaskLabel", 'String'>;
    readonly name: Prisma.FieldRef<"TaskLabel", 'String'>;
    readonly color: Prisma.FieldRef<"TaskLabel", 'String'>;
    readonly taskId: Prisma.FieldRef<"TaskLabel", 'String'>;
}
export type TaskLabelFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
    where: Prisma.TaskLabelWhereUniqueInput;
};
export type TaskLabelFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
    where: Prisma.TaskLabelWhereUniqueInput;
};
export type TaskLabelFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskLabelFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskLabelFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskLabelCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskLabelCreateInput, Prisma.TaskLabelUncheckedCreateInput>;
};
export type TaskLabelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskLabelCreateManyInput | Prisma.TaskLabelCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskLabelCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    data: Prisma.TaskLabelCreateManyInput | Prisma.TaskLabelCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskLabelIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskLabelUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskLabelUpdateInput, Prisma.TaskLabelUncheckedUpdateInput>;
    where: Prisma.TaskLabelWhereUniqueInput;
};
export type TaskLabelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskLabelUpdateManyMutationInput, Prisma.TaskLabelUncheckedUpdateManyInput>;
    where?: Prisma.TaskLabelWhereInput;
    limit?: number;
};
export type TaskLabelUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskLabelUpdateManyMutationInput, Prisma.TaskLabelUncheckedUpdateManyInput>;
    where?: Prisma.TaskLabelWhereInput;
    limit?: number;
    include?: Prisma.TaskLabelIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskLabelUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
    where: Prisma.TaskLabelWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskLabelCreateInput, Prisma.TaskLabelUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskLabelUpdateInput, Prisma.TaskLabelUncheckedUpdateInput>;
};
export type TaskLabelDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
    where: Prisma.TaskLabelWhereUniqueInput;
};
export type TaskLabelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskLabelWhereInput;
    limit?: number;
};
export type TaskLabelDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskLabelSelect<ExtArgs> | null;
    omit?: Prisma.TaskLabelOmit<ExtArgs> | null;
    include?: Prisma.TaskLabelInclude<ExtArgs> | null;
};
