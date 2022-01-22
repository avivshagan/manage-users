
export type Const = {
  type: "Const"
  value: any
}

export type Prop = {
  type: "Prop"
  path: string
}

export type Exp = Const | Prop

export enum Op {
  Gt,
  Eq,
  Lt
}

export type Condition = {
  type: "Predicate"
  left: Exp
  op: Op
  right: Exp
}

export enum GroupType {
  And,
  Or
}

export type Group = {
  type: "Group"
  groupType: GroupType
  conditions: Condition[]
}

export type Result = { [key: string]: Exp }

export type Rule = {
  group: Group
  result: Result
}