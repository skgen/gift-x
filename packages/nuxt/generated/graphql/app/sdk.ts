import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
  GraphQLBigInt: { input: number; output: number; }
  GraphQLStringOrFloat: { input: string | number; output: string | number; }
  Hash: { input: string; output: string; }
  JSON: { input: unknown; output: unknown; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation';
  create_event_item: Maybe<Event>;
  create_event_items: Array<Event>;
  create_wish_item: Maybe<Wish>;
  create_wish_items: Array<Wish>;
  create_wish_list_item: Maybe<Wish_List>;
  create_wish_list_items: Array<Wish_List>;
  delete_event_item: Maybe<Delete_One>;
  delete_event_items: Maybe<Delete_Many>;
  delete_wish_item: Maybe<Delete_One>;
  delete_wish_items: Maybe<Delete_Many>;
  delete_wish_list_item: Maybe<Delete_One>;
  delete_wish_list_items: Maybe<Delete_Many>;
  update_event_batch: Array<Event>;
  update_event_item: Maybe<Event>;
  update_event_items: Array<Event>;
  update_wish_batch: Array<Wish>;
  update_wish_item: Maybe<Wish>;
  update_wish_items: Array<Wish>;
  update_wish_list_batch: Array<Wish_List>;
  update_wish_list_item: Maybe<Wish_List>;
  update_wish_list_items: Array<Wish_List>;
};


export type MutationCreate_Event_ItemArgs = {
  data: Create_Event_Input;
};


export type MutationCreate_Event_ItemsArgs = {
  data: InputMaybe<Array<Create_Event_Input>>;
  filter: InputMaybe<Event_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Wish_ItemArgs = {
  data: Create_Wish_Input;
};


export type MutationCreate_Wish_ItemsArgs = {
  data: InputMaybe<Array<Create_Wish_Input>>;
  filter: InputMaybe<Wish_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Wish_List_ItemArgs = {
  data: Create_Wish_List_Input;
};


export type MutationCreate_Wish_List_ItemsArgs = {
  data: InputMaybe<Array<Create_Wish_List_Input>>;
  filter: InputMaybe<Wish_List_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Event_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Event_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Wish_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Wish_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Wish_List_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Wish_List_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_Event_BatchArgs = {
  data: InputMaybe<Array<Update_Event_Input>>;
  filter: InputMaybe<Event_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Event_ItemArgs = {
  data: Update_Event_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Event_ItemsArgs = {
  data: Update_Event_Input;
  filter: InputMaybe<Event_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Wish_BatchArgs = {
  data: InputMaybe<Array<Update_Wish_Input>>;
  filter: InputMaybe<Wish_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Wish_ItemArgs = {
  data: Update_Wish_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Wish_ItemsArgs = {
  data: Update_Wish_Input;
  filter: InputMaybe<Wish_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Wish_List_BatchArgs = {
  data: InputMaybe<Array<Update_Wish_List_Input>>;
  filter: InputMaybe<Wish_List_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Wish_List_ItemArgs = {
  data: Update_Wish_List_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Wish_List_ItemsArgs = {
  data: Update_Wish_List_Input;
  filter: InputMaybe<Wish_List_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
  __typename?: 'Query';
  event: Array<Event>;
  event_aggregated: Array<Event_Aggregated>;
  event_by_id: Maybe<Event>;
  event_by_version: Maybe<Version_Event>;
  wish: Array<Wish>;
  wish_aggregated: Array<Wish_Aggregated>;
  wish_by_id: Maybe<Wish>;
  wish_by_version: Maybe<Version_Wish>;
  wish_list: Array<Wish_List>;
  wish_list_aggregated: Array<Wish_List_Aggregated>;
  wish_list_by_id: Maybe<Wish_List>;
  wish_list_by_version: Maybe<Version_Wish_List>;
};


export type QueryEventArgs = {
  filter: InputMaybe<Event_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvent_AggregatedArgs = {
  filter: InputMaybe<Event_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvent_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryEvent_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryWishArgs = {
  filter: InputMaybe<Wish_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWish_AggregatedArgs = {
  filter: InputMaybe<Wish_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWish_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryWish_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryWish_ListArgs = {
  filter: InputMaybe<Wish_List_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWish_List_AggregatedArgs = {
  filter: InputMaybe<Wish_List_Filter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWish_List_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryWish_List_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  directus_access_mutated: Maybe<Directus_Access_Mutated>;
  directus_activity_mutated: Maybe<Directus_Activity_Mutated>;
  directus_comments_mutated: Maybe<Directus_Comments_Mutated>;
  directus_dashboards_mutated: Maybe<Directus_Dashboards_Mutated>;
  directus_files_mutated: Maybe<Directus_Files_Mutated>;
  directus_flows_mutated: Maybe<Directus_Flows_Mutated>;
  directus_folders_mutated: Maybe<Directus_Folders_Mutated>;
  directus_notifications_mutated: Maybe<Directus_Notifications_Mutated>;
  directus_operations_mutated: Maybe<Directus_Operations_Mutated>;
  directus_panels_mutated: Maybe<Directus_Panels_Mutated>;
  directus_permissions_mutated: Maybe<Directus_Permissions_Mutated>;
  directus_policies_mutated: Maybe<Directus_Policies_Mutated>;
  directus_presets_mutated: Maybe<Directus_Presets_Mutated>;
  directus_revisions_mutated: Maybe<Directus_Revisions_Mutated>;
  directus_roles_mutated: Maybe<Directus_Roles_Mutated>;
  directus_settings_mutated: Maybe<Directus_Settings_Mutated>;
  directus_shares_mutated: Maybe<Directus_Shares_Mutated>;
  directus_translations_mutated: Maybe<Directus_Translations_Mutated>;
  directus_users_mutated: Maybe<Directus_Users_Mutated>;
  directus_versions_mutated: Maybe<Directus_Versions_Mutated>;
  directus_webhooks_mutated: Maybe<Directus_Webhooks_Mutated>;
  event_mutated: Maybe<Event_Mutated>;
  wish_list_mutated: Maybe<Wish_List_Mutated>;
  wish_mutated: Maybe<Wish_Mutated>;
};


export type SubscriptionDirectus_Access_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Activity_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Comments_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Dashboards_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Flows_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Operations_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Panels_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Permissions_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Policies_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Presets_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Revisions_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Settings_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Translations_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Versions_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Webhooks_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionEvent_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionWish_List_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionWish_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count: Maybe<Scalars['Int']['output']>;
};

export type Create_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<Create_Directus_Policies_Input>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download: Scalars['String']['input'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Permissions_Input = {
  action: Scalars['String']['input'];
  collection: Scalars['String']['input'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<Create_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Create_Directus_Policies_Input = {
  admin_access: Scalars['Boolean']['input'];
  app_access: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<Create_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
};

export type Create_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<Create_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Create_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  policies?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  text_direction?: InputMaybe<Scalars['String']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Create_Event_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  wish_list?: InputMaybe<Array<InputMaybe<Create_Wish_List_Input>>>;
};

export type Create_Wish_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  name: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  wish_list?: InputMaybe<Create_Wish_List_Input>;
};

export type Create_Wish_List_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  event?: InputMaybe<Create_Event_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  wish?: InputMaybe<Array<InputMaybe<Create_Wish_Input>>>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day: Maybe<Scalars['Int']['output']>;
  hour: Maybe<Scalars['Int']['output']>;
  minute: Maybe<Scalars['Int']['output']>;
  month: Maybe<Scalars['Int']['output']>;
  second: Maybe<Scalars['Int']['output']>;
  week: Maybe<Scalars['Int']['output']>;
  weekday: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
};

export type Directus_Access = {
  __typename?: 'directus_access';
  id: Scalars['ID']['output'];
  policy: Maybe<Directus_Policies>;
  role: Maybe<Directus_Roles>;
  sort: Maybe<Scalars['Int']['output']>;
  user: Maybe<Directus_Users>;
};


export type Directus_AccessPolicyArgs = {
  filter: InputMaybe<Directus_Policies_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_AccessRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_AccessUserArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Access_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  id?: InputMaybe<Id_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  role?: InputMaybe<Directus_Roles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Access_Mutated = {
  __typename?: 'directus_access_mutated';
  data: Maybe<Directus_Access>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Access_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _none?: InputMaybe<Directus_Access_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _some?: InputMaybe<Directus_Access_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  role?: InputMaybe<Directus_Roles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Activity = {
  __typename?: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ip: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin: Maybe<Scalars['String']['output']>;
  revisions: Maybe<Array<Maybe<Directus_Revisions>>>;
  revisions_func: Maybe<Count_Functions>;
  timestamp: Maybe<Scalars['Date']['output']>;
  timestamp_func: Maybe<Datetime_Functions>;
  user: Maybe<Directus_Users>;
  user_agent: Maybe<Scalars['String']['output']>;
};


export type Directus_ActivityRevisionsArgs = {
  filter: InputMaybe<Directus_Revisions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_ActivityUserArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ip?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  origin?: InputMaybe<String_Filter_Operators>;
  revisions?: InputMaybe<Directus_Revisions_Quantifier_Filter>;
  revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
  user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Activity_Mutated = {
  __typename?: 'directus_activity_mutated';
  data: Maybe<Directus_Activity>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Comments = {
  __typename?: 'directus_comments';
  collection: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  user_created: Maybe<Directus_Users>;
  user_updated: Maybe<Directus_Users>;
};


export type Directus_CommentsUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CommentsUser_UpdatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Comments_Mutated = {
  __typename?: 'directus_comments_mutated';
  data: Maybe<Directus_Comments>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Dashboards = {
  __typename?: 'directus_dashboards';
  color: Maybe<Scalars['String']['output']>;
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note: Maybe<Scalars['String']['output']>;
  panels: Maybe<Array<Maybe<Directus_Panels>>>;
  panels_func: Maybe<Count_Functions>;
  user_created: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
  filter: InputMaybe<Directus_Panels_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  panels?: InputMaybe<Directus_Panels_Quantifier_Filter>;
  panels_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Dashboards_Mutated = {
  __typename?: 'directus_dashboards_mutated';
  data: Maybe<Directus_Dashboards>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset: Maybe<Scalars['String']['output']>;
  created_on: Maybe<Scalars['Date']['output']>;
  created_on_func: Maybe<Datetime_Functions>;
  description: Maybe<Scalars['String']['output']>;
  duration: Maybe<Scalars['Int']['output']>;
  embed: Maybe<Scalars['String']['output']>;
  filename_disk: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x: Maybe<Scalars['Int']['output']>;
  focal_point_y: Maybe<Scalars['Int']['output']>;
  folder: Maybe<Directus_Folders>;
  height: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  metadata_func: Maybe<Count_Functions>;
  modified_by: Maybe<Directus_Users>;
  modified_on: Maybe<Scalars['Date']['output']>;
  modified_on_func: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags: Maybe<Scalars['JSON']['output']>;
  tags_func: Maybe<Count_Functions>;
  title: Maybe<Scalars['String']['output']>;
  tus_data: Maybe<Scalars['JSON']['output']>;
  tus_data_func: Maybe<Count_Functions>;
  tus_id: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  uploaded_by: Maybe<Directus_Users>;
  uploaded_on: Maybe<Scalars['Date']['output']>;
  uploaded_on_func: Maybe<Datetime_Functions>;
  width: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
  filter: InputMaybe<Directus_Folders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data: Maybe<Directus_Files>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Flows = {
  __typename?: 'directus_flows';
  accountability: Maybe<Scalars['String']['output']>;
  color: Maybe<Scalars['String']['output']>;
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation: Maybe<Directus_Operations>;
  operations: Maybe<Array<Maybe<Directus_Operations>>>;
  operations_func: Maybe<Count_Functions>;
  options: Maybe<Scalars['JSON']['output']>;
  options_func: Maybe<Count_Functions>;
  status: Maybe<Scalars['String']['output']>;
  trigger: Maybe<Scalars['String']['output']>;
  user_created: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
  filter: InputMaybe<Directus_Operations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsOperationsArgs = {
  filter: InputMaybe<Directus_Operations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  accountability?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  operation?: InputMaybe<Directus_Operations_Filter>;
  operations?: InputMaybe<Directus_Operations_Quantifier_Filter>;
  operations_func?: InputMaybe<Count_Function_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  trigger?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Flows_Mutated = {
  __typename?: 'directus_flows_mutated';
  data: Maybe<Directus_Flows>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter: InputMaybe<Directus_Folders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  __typename?: 'directus_folders_mutated';
  data: Maybe<Directus_Folders>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Notifications = {
  __typename?: 'directus_notifications';
  collection: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
  recipient: Maybe<Directus_Users>;
  sender: Maybe<Directus_Users>;
  status: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp: Maybe<Scalars['Date']['output']>;
  timestamp_func: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Notifications_Mutated = {
  __typename?: 'directus_notifications_mutated';
  data: Maybe<Directus_Notifications>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Operations = {
  __typename?: 'directus_operations';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  flow: Maybe<Directus_Flows>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
  options: Maybe<Scalars['JSON']['output']>;
  options_func: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  reject: Maybe<Directus_Operations>;
  resolve: Maybe<Directus_Operations>;
  type: Scalars['String']['output'];
  user_created: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
  filter: InputMaybe<Directus_Flows_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsRejectArgs = {
  filter: InputMaybe<Directus_Operations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsResolveArgs = {
  filter: InputMaybe<Directus_Operations_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Operations_Mutated = {
  __typename?: 'directus_operations_mutated';
  data: Maybe<Directus_Operations>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Operations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _none?: InputMaybe<Directus_Operations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _some?: InputMaybe<Directus_Operations_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Panels = {
  __typename?: 'directus_panels';
  color: Maybe<Scalars['String']['output']>;
  dashboard: Maybe<Directus_Dashboards>;
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  height: Scalars['Int']['output'];
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  note: Maybe<Scalars['String']['output']>;
  options: Maybe<Scalars['JSON']['output']>;
  options_func: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created: Maybe<Directus_Users>;
  width: Scalars['Int']['output'];
};


export type Directus_PanelsDashboardArgs = {
  filter: InputMaybe<Directus_Dashboards_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Panels_Mutated = {
  __typename?: 'directus_panels_mutated';
  data: Maybe<Directus_Panels>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Panels_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _none?: InputMaybe<Directus_Panels_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _some?: InputMaybe<Directus_Panels_Filter>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Permissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Maybe<Scalars['ID']['output']>;
  permissions: Maybe<Scalars['JSON']['output']>;
  permissions_func: Maybe<Count_Functions>;
  policy: Maybe<Directus_Policies>;
  presets: Maybe<Scalars['JSON']['output']>;
  presets_func: Maybe<Count_Functions>;
  validation: Maybe<Scalars['JSON']['output']>;
  validation_func: Maybe<Count_Functions>;
};


export type Directus_PermissionsPolicyArgs = {
  filter: InputMaybe<Directus_Policies_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Permissions_Mutated = {
  __typename?: 'directus_permissions_mutated';
  data: Maybe<Directus_Permissions>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Permissions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _none?: InputMaybe<Directus_Permissions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _some?: InputMaybe<Directus_Permissions_Filter>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Policies = {
  __typename?: 'directus_policies';
  admin_access: Scalars['Boolean']['output'];
  app_access: Scalars['Boolean']['output'];
  description: Maybe<Scalars['String']['output']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['output'];
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_access: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  permissions: Maybe<Array<Maybe<Directus_Permissions>>>;
  permissions_func: Maybe<Count_Functions>;
  roles: Maybe<Array<Maybe<Directus_Access>>>;
  roles_func: Maybe<Count_Functions>;
  users: Maybe<Array<Maybe<Directus_Access>>>;
  users_func: Maybe<Count_Functions>;
};


export type Directus_PoliciesPermissionsArgs = {
  filter: InputMaybe<Directus_Permissions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PoliciesRolesArgs = {
  filter: InputMaybe<Directus_Access_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PoliciesUsersArgs = {
  filter: InputMaybe<Directus_Access_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Policies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  permissions?: InputMaybe<Directus_Permissions_Quantifier_Filter>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  roles?: InputMaybe<Directus_Access_Quantifier_Filter>;
  roles_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Access_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Policies_Mutated = {
  __typename?: 'directus_policies_mutated';
  data: Maybe<Directus_Policies>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Presets = {
  __typename?: 'directus_presets';
  bookmark: Maybe<Scalars['String']['output']>;
  collection: Maybe<Scalars['String']['output']>;
  color: Maybe<Scalars['String']['output']>;
  filter: Maybe<Scalars['JSON']['output']>;
  filter_func: Maybe<Count_Functions>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout: Maybe<Scalars['String']['output']>;
  layout_options: Maybe<Scalars['JSON']['output']>;
  layout_options_func: Maybe<Count_Functions>;
  layout_query: Maybe<Scalars['JSON']['output']>;
  layout_query_func: Maybe<Count_Functions>;
  refresh_interval: Maybe<Scalars['Int']['output']>;
  role: Maybe<Directus_Roles>;
  search: Maybe<Scalars['String']['output']>;
  user: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PresetsUserArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Presets_Mutated = {
  __typename?: 'directus_presets_mutated';
  data: Maybe<Directus_Presets>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Revisions = {
  __typename?: 'directus_revisions';
  activity: Maybe<Directus_Activity>;
  collection: Scalars['String']['output'];
  data: Maybe<Scalars['JSON']['output']>;
  data_func: Maybe<Count_Functions>;
  delta: Maybe<Scalars['JSON']['output']>;
  delta_func: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  parent: Maybe<Directus_Revisions>;
  version: Maybe<Directus_Versions>;
};


export type Directus_RevisionsActivityArgs = {
  filter: InputMaybe<Directus_Activity_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsParentArgs = {
  filter: InputMaybe<Directus_Revisions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsVersionArgs = {
  filter: InputMaybe<Directus_Versions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
  version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Revisions_Mutated = {
  __typename?: 'directus_revisions_mutated';
  data: Maybe<Directus_Revisions>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Revisions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _none?: InputMaybe<Directus_Revisions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _some?: InputMaybe<Directus_Revisions_Filter>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
  version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  children: Maybe<Array<Maybe<Directus_Roles>>>;
  children_func: Maybe<Count_Functions>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent: Maybe<Directus_Roles>;
  policies: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func: Maybe<Count_Functions>;
  users: Maybe<Array<Maybe<Directus_Users>>>;
  users_func: Maybe<Count_Functions>;
};


export type Directus_RolesChildrenArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesParentArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesPoliciesArgs = {
  filter: InputMaybe<Directus_Access_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesUsersArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  children?: InputMaybe<Directus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Roles_Filter>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  __typename?: 'directus_roles_mutated';
  data: Maybe<Directus_Roles>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Roles_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _none?: InputMaybe<Directus_Roles_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _some?: InputMaybe<Directus_Roles_Filter>;
  children?: InputMaybe<Directus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Roles_Filter>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Settings = {
  __typename?: 'directus_settings';
  accepted_terms: Maybe<Scalars['Boolean']['output']>;
  auth_login_attempts: Maybe<Scalars['Int']['output']>;
  auth_password_policy: Maybe<Scalars['String']['output']>;
  basemaps: Maybe<Scalars['JSON']['output']>;
  basemaps_func: Maybe<Count_Functions>;
  custom_aspect_ratios: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func: Maybe<Count_Functions>;
  custom_css: Maybe<Scalars['String']['output']>;
  default_appearance: Maybe<Scalars['String']['output']>;
  default_language: Maybe<Scalars['String']['output']>;
  default_theme_dark: Maybe<Scalars['String']['output']>;
  default_theme_light: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_allow_deletes_note */
  mcp_allow_deletes: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.mcp_enabled_note */
  mcp_enabled: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.mcp_prompts_collection_note */
  mcp_prompts_collection: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_system_prompt_note */
  mcp_system_prompt: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_system_prompt_enabled_note */
  mcp_system_prompt_enabled: Maybe<Scalars['Boolean']['output']>;
  module_bar: Maybe<Scalars['JSON']['output']>;
  module_bar_func: Maybe<Count_Functions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color: Maybe<Scalars['String']['output']>;
  project_descriptor: Maybe<Scalars['String']['output']>;
  project_id: Maybe<Scalars['ID']['output']>;
  project_logo: Maybe<Directus_Files>;
  project_name: Maybe<Scalars['String']['output']>;
  project_url: Maybe<Scalars['String']['output']>;
  public_background: Maybe<Directus_Files>;
  public_favicon: Maybe<Directus_Files>;
  public_foreground: Maybe<Directus_Files>;
  public_note: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter: Maybe<Scalars['JSON']['output']>;
  public_registration_email_filter_func: Maybe<Count_Functions>;
  public_registration_role: Maybe<Directus_Roles>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email: Maybe<Scalars['Boolean']['output']>;
  report_bug_url: Maybe<Scalars['String']['output']>;
  report_error_url: Maybe<Scalars['String']['output']>;
  report_feature_url: Maybe<Scalars['String']['output']>;
  storage_asset_presets: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func: Maybe<Count_Functions>;
  storage_asset_transform: Maybe<Scalars['String']['output']>;
  storage_default_folder: Maybe<Directus_Folders>;
  theme_dark_overrides: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func: Maybe<Count_Functions>;
  theme_light_overrides: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func: Maybe<Count_Functions>;
  visual_editor_urls: Maybe<Scalars['JSON']['output']>;
  visual_editor_urls_func: Maybe<Count_Functions>;
};


export type Directus_SettingsProject_LogoArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_FaviconArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_Registration_RoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
  filter: InputMaybe<Directus_Folders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Settings_Mutated = {
  __typename?: 'directus_settings_mutated';
  data: Maybe<Directus_Settings>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Shares = {
  __typename?: 'directus_shares';
  collection: Scalars['String']['output'];
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end: Maybe<Scalars['Date']['output']>;
  date_end_func: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start: Maybe<Scalars['Date']['output']>;
  date_start_func: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password: Maybe<Scalars['Hash']['output']>;
  role: Maybe<Directus_Roles>;
  times_used: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Mutated = {
  __typename?: 'directus_shares_mutated';
  data: Maybe<Directus_Shares>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Translations = {
  __typename?: 'directus_translations';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Directus_Translations_Mutated = {
  __typename?: 'directus_translations_mutated';
  data: Maybe<Directus_Translations>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users = {
  __typename?: 'directus_users';
  appearance: Maybe<Scalars['String']['output']>;
  auth_data: Maybe<Scalars['JSON']['output']>;
  auth_data_func: Maybe<Count_Functions>;
  avatar: Maybe<Directus_Files>;
  description: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['String']['output']>;
  email_notifications: Maybe<Scalars['Boolean']['output']>;
  external_identifier: Maybe<Scalars['String']['output']>;
  first_name: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Maybe<Scalars['String']['output']>;
  last_access: Maybe<Scalars['Date']['output']>;
  last_access_func: Maybe<Datetime_Functions>;
  last_name: Maybe<Scalars['String']['output']>;
  last_page: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  password: Maybe<Scalars['Hash']['output']>;
  policies: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func: Maybe<Count_Functions>;
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<Directus_Roles>;
  status: Maybe<Scalars['String']['output']>;
  tags: Maybe<Scalars['JSON']['output']>;
  tags_func: Maybe<Count_Functions>;
  text_direction: Maybe<Scalars['String']['output']>;
  tfa_secret: Maybe<Scalars['Hash']['output']>;
  theme_dark: Maybe<Scalars['String']['output']>;
  theme_dark_overrides: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func: Maybe<Count_Functions>;
  theme_light: Maybe<Scalars['String']['output']>;
  theme_light_overrides: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func: Maybe<Count_Functions>;
  title: Maybe<Scalars['String']['output']>;
  token: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersPoliciesArgs = {
  filter: InputMaybe<Directus_Access_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  text_direction?: InputMaybe<String_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename?: 'directus_users_mutated';
  data: Maybe<Directus_Users>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _none?: InputMaybe<Directus_Users_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _some?: InputMaybe<Directus_Users_Filter>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  text_direction?: InputMaybe<String_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Versions = {
  __typename?: 'directus_versions';
  collection: Scalars['String']['output'];
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  delta: Maybe<Scalars['JSON']['output']>;
  delta_func: Maybe<Count_Functions>;
  hash: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
  user_created: Maybe<Directus_Users>;
  user_updated: Maybe<Directus_Users>;
};


export type Directus_VersionsUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_VersionsUser_UpdatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Versions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  hash?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Versions_Mutated = {
  __typename?: 'directus_versions_mutated';
  data: Maybe<Directus_Versions>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Webhooks = {
  __typename?: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']['output']>>;
  collections: Array<Maybe<Scalars['String']['output']>>;
  data: Maybe<Scalars['Boolean']['output']>;
  headers: Maybe<Scalars['JSON']['output']>;
  headers_func: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  method: Maybe<Scalars['String']['output']>;
  migrated_flow: Maybe<Directus_Flows>;
  name: Scalars['String']['output'];
  status: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  was_active_before_deprecation: Scalars['Boolean']['output'];
};


export type Directus_WebhooksMigrated_FlowArgs = {
  filter: InputMaybe<Directus_Flows_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Webhooks_Mutated = {
  __typename?: 'directus_webhooks_mutated';
  data: Maybe<Directus_Webhooks>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Event = {
  __typename?: 'event';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  user_created: Maybe<Directus_Users>;
  user_updated: Maybe<Directus_Users>;
  wish_list: Maybe<Array<Maybe<Wish_List>>>;
  wish_list_func: Maybe<Count_Functions>;
};


export type EventUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventUser_UpdatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventWish_ListArgs = {
  filter: InputMaybe<Wish_List_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Event_Aggregated = {
  __typename?: 'event_aggregated';
  avg: Maybe<Event_Aggregated_Fields>;
  avgDistinct: Maybe<Event_Aggregated_Fields>;
  count: Maybe<Event_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Event_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Event_Aggregated_Fields>;
  min: Maybe<Event_Aggregated_Fields>;
  sum: Maybe<Event_Aggregated_Fields>;
  sumDistinct: Maybe<Event_Aggregated_Fields>;
};

export type Event_Aggregated_Count = {
  __typename?: 'event_aggregated_count';
  date_created: Maybe<Scalars['Int']['output']>;
  date_updated: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Scalars['Int']['output']>;
  user_updated: Maybe<Scalars['Int']['output']>;
  wish_list: Maybe<Scalars['Int']['output']>;
};

export type Event_Aggregated_Fields = {
  __typename?: 'event_aggregated_fields';
  sort: Maybe<Scalars['Float']['output']>;
};

export type Event_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  wish_list?: InputMaybe<Wish_List_Quantifier_Filter>;
  wish_list_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Event_Mutated = {
  __typename?: 'event_mutated';
  data: Maybe<Event>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Id_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['ID']['input']>;
  _eq?: InputMaybe<Scalars['ID']['input']>;
  _icontains?: InputMaybe<Scalars['ID']['input']>;
  _iends_with?: InputMaybe<Scalars['ID']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']['input']>;
  _ncontains?: InputMaybe<Scalars['ID']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['ID']['input']>;
  _neq?: InputMaybe<Scalars['ID']['input']>;
  _niends_with?: InputMaybe<Scalars['ID']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['ID']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<Update_Directus_Policies_Input>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Permissions_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<Update_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Update_Directus_Policies_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']['input']>;
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Update_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
};

export type Update_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<Update_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Update_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  policies?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  text_direction?: InputMaybe<Scalars['String']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Update_Event_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  wish_list?: InputMaybe<Array<InputMaybe<Update_Wish_List_Input>>>;
};

export type Update_Wish_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  wish_list?: InputMaybe<Update_Wish_List_Input>;
};

export type Update_Wish_List_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  event?: InputMaybe<Update_Event_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  wish?: InputMaybe<Array<InputMaybe<Update_Wish_Input>>>;
};

export type Version_Event = {
  __typename?: 'version_event';
  date_created: Maybe<Scalars['Date']['output']>;
  date_updated: Maybe<Scalars['Date']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  user_created: Maybe<Scalars['JSON']['output']>;
  user_updated: Maybe<Scalars['JSON']['output']>;
  wish_list: Maybe<Scalars['JSON']['output']>;
};

export type Version_Wish = {
  __typename?: 'version_wish';
  date_created: Maybe<Scalars['Date']['output']>;
  date_updated: Maybe<Scalars['Date']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Scalars['JSON']['output']>;
  name: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['String']['output']>;
  user_created: Maybe<Scalars['JSON']['output']>;
  user_updated: Maybe<Scalars['JSON']['output']>;
  wish_list: Maybe<Scalars['JSON']['output']>;
};

export type Version_Wish_List = {
  __typename?: 'version_wish_list';
  date_created: Maybe<Scalars['Date']['output']>;
  date_updated: Maybe<Scalars['Date']['output']>;
  event: Maybe<Scalars['JSON']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Scalars['JSON']['output']>;
  user_updated: Maybe<Scalars['JSON']['output']>;
  wish: Maybe<Scalars['JSON']['output']>;
};

export type Wish = {
  __typename?: 'wish';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Directus_Files>;
  name: Scalars['String']['output'];
  sort: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['String']['output']>;
  user_created: Maybe<Directus_Users>;
  user_updated: Maybe<Directus_Users>;
  wish_list: Maybe<Wish_List>;
};


export type WishImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WishUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WishUser_UpdatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WishWish_ListArgs = {
  filter: InputMaybe<Wish_List_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Wish_Aggregated = {
  __typename?: 'wish_aggregated';
  avg: Maybe<Wish_Aggregated_Fields>;
  avgDistinct: Maybe<Wish_Aggregated_Fields>;
  count: Maybe<Wish_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Wish_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Wish_Aggregated_Fields>;
  min: Maybe<Wish_Aggregated_Fields>;
  sum: Maybe<Wish_Aggregated_Fields>;
  sumDistinct: Maybe<Wish_Aggregated_Fields>;
};

export type Wish_Aggregated_Count = {
  __typename?: 'wish_aggregated_count';
  date_created: Maybe<Scalars['Int']['output']>;
  date_updated: Maybe<Scalars['Int']['output']>;
  description: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Scalars['Int']['output']>;
  user_updated: Maybe<Scalars['Int']['output']>;
  wish_list: Maybe<Scalars['Int']['output']>;
};

export type Wish_Aggregated_Fields = {
  __typename?: 'wish_aggregated_fields';
  sort: Maybe<Scalars['Float']['output']>;
};

export type Wish_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wish_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Wish_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  wish_list?: InputMaybe<Wish_List_Filter>;
};

export type Wish_List = {
  __typename?: 'wish_list';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<Datetime_Functions>;
  date_updated: Maybe<Scalars['Date']['output']>;
  date_updated_func: Maybe<Datetime_Functions>;
  event: Maybe<Event>;
  id: Scalars['ID']['output'];
  sort: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Directus_Users>;
  user_updated: Maybe<Directus_Users>;
  wish: Maybe<Array<Maybe<Wish>>>;
  wish_func: Maybe<Count_Functions>;
};


export type Wish_ListEventArgs = {
  filter: InputMaybe<Event_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Wish_ListUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Wish_ListUser_UpdatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Wish_ListWishArgs = {
  filter: InputMaybe<Wish_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Wish_List_Aggregated = {
  __typename?: 'wish_list_aggregated';
  avg: Maybe<Wish_List_Aggregated_Fields>;
  avgDistinct: Maybe<Wish_List_Aggregated_Fields>;
  count: Maybe<Wish_List_Aggregated_Count>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<Wish_List_Aggregated_Count>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<Wish_List_Aggregated_Fields>;
  min: Maybe<Wish_List_Aggregated_Fields>;
  sum: Maybe<Wish_List_Aggregated_Fields>;
  sumDistinct: Maybe<Wish_List_Aggregated_Fields>;
};

export type Wish_List_Aggregated_Count = {
  __typename?: 'wish_list_aggregated_count';
  date_created: Maybe<Scalars['Int']['output']>;
  date_updated: Maybe<Scalars['Int']['output']>;
  event: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  user_created: Maybe<Scalars['Int']['output']>;
  user_updated: Maybe<Scalars['Int']['output']>;
  wish: Maybe<Scalars['Int']['output']>;
};

export type Wish_List_Aggregated_Fields = {
  __typename?: 'wish_list_aggregated_fields';
  sort: Maybe<Scalars['Float']['output']>;
};

export type Wish_List_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wish_List_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Wish_List_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  event?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  wish?: InputMaybe<Wish_Quantifier_Filter>;
  wish_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Wish_List_Mutated = {
  __typename?: 'wish_list_mutated';
  data: Maybe<Wish_List>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Wish_List_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wish_List_Filter>>>;
  _none?: InputMaybe<Wish_List_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Wish_List_Filter>>>;
  _some?: InputMaybe<Wish_List_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  event?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  wish?: InputMaybe<Wish_Quantifier_Filter>;
  wish_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Wish_Mutated = {
  __typename?: 'wish_mutated';
  data: Maybe<Wish>;
  event: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Wish_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wish_Filter>>>;
  _none?: InputMaybe<Wish_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Wish_Filter>>>;
  _some?: InputMaybe<Wish_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  wish_list?: InputMaybe<Wish_List_Filter>;
};

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'Query' };

export type ReadEventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReadEventQuery = { __typename?: 'Query', event: { __typename?: 'event', name: string | null, id: string } | null };

export type ReadEventWithSiblingsWishListQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReadEventWithSiblingsWishListQuery = { __typename?: 'Query', event: { __typename?: 'event', name: string | null, id: string, wishLists: Array<{ __typename?: 'wish_list', id: string, user: { __typename?: 'directus_users', id: string, firstName: string | null, lastName: string | null } | null } | null> | null } | null };

export type ReadMyEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadMyEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'event', name: string | null, id: string, wishLists: Array<{ __typename?: 'wish_list', id: string } | null> | null }> };

export type CreateWishMutationVariables = Exact<{
  data: Create_Wish_Input;
}>;


export type CreateWishMutation = { __typename?: 'Mutation', wish: { __typename?: 'wish', id: string, name: string } | null };

export type DeleteWishMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteWishMutation = { __typename?: 'Mutation', wish: { __typename?: 'delete_one', id: string } | null };

export type WishQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type WishQuery = { __typename?: 'Query', wish: { __typename?: 'wish', id: string, name: string, url: string | null, description: string | null, image: { __typename?: 'directus_files', id: string } | null, wishList: { __typename?: 'wish_list', id: string } | null } | null };

export type ReadWishToDeleteWishQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReadWishToDeleteWishQuery = { __typename?: 'Query', wish: { __typename?: 'wish', id: string, image: { __typename?: 'directus_files', id: string } | null } | null };

export type UpdateWishMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: Update_Wish_Input;
}>;


export type UpdateWishMutation = { __typename?: 'Mutation', wish: { __typename?: 'wish', id: string, name: string } | null };

export type CreateWishListMutationVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;


export type CreateWishListMutation = { __typename?: 'Mutation', create_wish_list_item: { __typename?: 'wish_list', id: string } | null };

export type ReadMyWishListQueryVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;


export type ReadMyWishListQuery = { __typename?: 'Query', wishList: Array<{ __typename?: 'wish_list', id: string, event: { __typename?: 'event', name: string | null } | null, wishes: Array<{ __typename?: 'wish', id: string, name: string, image: { __typename?: 'directus_files', id: string, title: string | null } | null } | null> | null }> };

export type ReadWishListQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReadWishListQuery = { __typename?: 'Query', wishList: { __typename?: 'wish_list', id: string, event: { __typename?: 'event', name: string | null } | null, user: { __typename?: 'directus_users', firstName: string | null, lastName: string | null } | null, wishes: Array<{ __typename?: 'wish', id: string, name: string, url: string | null, description: string | null, image: { __typename?: 'directus_files', id: string, title: string | null } | null } | null> | null } | null };


export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;
export const ReadEventDocument = gql`
    query readEvent($id: ID!) {
  event: event_by_id(id: $id) {
    name
    id
  }
}
    `;
export const ReadEventWithSiblingsWishListDocument = gql`
    query readEventWithSiblingsWishList($id: ID!) {
  event: event_by_id(id: $id) {
    name
    id
    wishLists: wish_list(
      filter: {user_created: {id: {_neq: "$CURRENT_USER"}, role: {name: {_eq: "User"}}}}
    ) {
      id
      user: user_created {
        id
        firstName: first_name
        lastName: last_name
      }
    }
  }
}
    `;
export const ReadMyEventsDocument = gql`
    query readMyEvents {
  events: event {
    name
    id
    wishLists: wish_list(filter: {user_created: {id: {_eq: "$CURRENT_USER"}}}) {
      id
    }
  }
}
    `;
export const CreateWishDocument = gql`
    mutation createWish($data: create_wish_input!) {
  wish: create_wish_item(data: $data) {
    id
    name
  }
}
    `;
export const DeleteWishDocument = gql`
    mutation deleteWish($id: ID!) {
  wish: delete_wish_item(id: $id) {
    id
  }
}
    `;
export const WishDocument = gql`
    query wish($id: ID!) {
  wish: wish_by_id(id: $id) {
    id
    name
    url
    description
    image {
      id
    }
    wishList: wish_list {
      id
    }
  }
}
    `;
export const ReadWishToDeleteWishDocument = gql`
    query readWishToDeleteWish($id: ID!) {
  wish: wish_by_id(id: $id) {
    id
    image {
      id
    }
  }
}
    `;
export const UpdateWishDocument = gql`
    mutation updateWish($id: ID!, $data: update_wish_input!) {
  wish: update_wish_item(id: $id, data: $data) {
    id
    name
  }
}
    `;
export const CreateWishListDocument = gql`
    mutation createWishList($eventId: ID!) {
  create_wish_list_item(data: {event: {id: $eventId}}) {
    id
  }
}
    `;
export const ReadMyWishListDocument = gql`
    query readMyWishList($eventId: ID!) {
  wishList: wish_list(
    filter: {user_created: {id: {_eq: "$CURRENT_USER"}}, event: {id: {_eq: $eventId}}}
  ) {
    id
    event {
      name
    }
    wishes: wish {
      id
      name
      image {
        id
        title
      }
    }
  }
}
    `;
export const ReadWishListDocument = gql`
    query readWishList($id: ID!) {
  wishList: wish_list_by_id(id: $id) {
    id
    event {
      name
    }
    user: user_created {
      firstName: first_name
      lastName: last_name
    }
    wishes: wish(sort: ["-date_created"]) {
      id
      name
      url
      description
      image {
        id
        title
      }
    }
  }
}
    `;

export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<{ data?: R | null; errors?: ReadonlyArray<import('graphql').GraphQLFormattedError>; response: Response | null }>;

export function getSdk<C>(requester: Requester<C>) {
  return {
    dummy(variables?: DummyQueryVariables, options?: C) {
      return requester<DummyQuery, DummyQueryVariables>(DummyDocument, variables, options);
    },
    readEvent(variables: ReadEventQueryVariables, options?: C) {
      return requester<ReadEventQuery, ReadEventQueryVariables>(ReadEventDocument, variables, options);
    },
    readEventWithSiblingsWishList(variables: ReadEventWithSiblingsWishListQueryVariables, options?: C) {
      return requester<ReadEventWithSiblingsWishListQuery, ReadEventWithSiblingsWishListQueryVariables>(ReadEventWithSiblingsWishListDocument, variables, options);
    },
    readMyEvents(variables?: ReadMyEventsQueryVariables, options?: C) {
      return requester<ReadMyEventsQuery, ReadMyEventsQueryVariables>(ReadMyEventsDocument, variables, options);
    },
    createWish(variables: CreateWishMutationVariables, options?: C) {
      return requester<CreateWishMutation, CreateWishMutationVariables>(CreateWishDocument, variables, options);
    },
    deleteWish(variables: DeleteWishMutationVariables, options?: C) {
      return requester<DeleteWishMutation, DeleteWishMutationVariables>(DeleteWishDocument, variables, options);
    },
    wish(variables: WishQueryVariables, options?: C) {
      return requester<WishQuery, WishQueryVariables>(WishDocument, variables, options);
    },
    readWishToDeleteWish(variables: ReadWishToDeleteWishQueryVariables, options?: C) {
      return requester<ReadWishToDeleteWishQuery, ReadWishToDeleteWishQueryVariables>(ReadWishToDeleteWishDocument, variables, options);
    },
    updateWish(variables: UpdateWishMutationVariables, options?: C) {
      return requester<UpdateWishMutation, UpdateWishMutationVariables>(UpdateWishDocument, variables, options);
    },
    createWishList(variables: CreateWishListMutationVariables, options?: C) {
      return requester<CreateWishListMutation, CreateWishListMutationVariables>(CreateWishListDocument, variables, options);
    },
    readMyWishList(variables: ReadMyWishListQueryVariables, options?: C) {
      return requester<ReadMyWishListQuery, ReadMyWishListQueryVariables>(ReadMyWishListDocument, variables, options);
    },
    readWishList(variables: ReadWishListQueryVariables, options?: C) {
      return requester<ReadWishListQuery, ReadWishListQueryVariables>(ReadWishListDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;