/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  Int_comparison_exp: {},
  String_comparison_exp: {},
  bigint: 'String',
  bigint_comparison_exp: {
    _eq: 'bigint',
    _gt: 'bigint',
    _gte: 'bigint',
    _in: 'bigint',
    _lt: 'bigint',
    _lte: 'bigint',
    _neq: 'bigint',
    _nin: 'bigint',
  },
  citext: 'String',
  citext_comparison_exp: {
    _eq: 'citext',
    _gt: 'citext',
    _gte: 'citext',
    _ilike: 'citext',
    _in: 'citext',
    _iregex: 'citext',
    _like: 'citext',
    _lt: 'citext',
    _lte: 'citext',
    _neq: 'citext',
    _nilike: 'citext',
    _nin: 'citext',
    _niregex: 'citext',
    _nlike: 'citext',
    _nregex: 'citext',
    _nsimilar: 'citext',
    _regex: 'citext',
    _similar: 'citext',
  },
  cosouls: {
    held_keys: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
    held_keys_aggregate: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
    key_holders: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
    key_holders_aggregate: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
  },
  cosouls_bool_exp: {
    _and: 'cosouls_bool_exp',
    _not: 'cosouls_bool_exp',
    _or: 'cosouls_bool_exp',
    address: 'citext_comparison_exp',
    held_keys: 'key_holders_bool_exp',
    held_keys_aggregate: 'key_holders_aggregate_bool_exp',
    id: 'Int_comparison_exp',
    key_holders: 'key_holders_bool_exp',
    key_holders_aggregate: 'key_holders_aggregate_bool_exp',
    pgive: 'Int_comparison_exp',
    profile_public: 'profiles_public_bool_exp',
    token_id: 'Int_comparison_exp',
  },
  cosouls_order_by: {
    address: 'order_by',
    held_keys_aggregate: 'key_holders_aggregate_order_by',
    id: 'order_by',
    key_holders_aggregate: 'key_holders_aggregate_order_by',
    pgive: 'order_by',
    profile_public: 'profiles_public_order_by',
    token_id: 'order_by',
  },
  cosouls_select_column: true,
  cosouls_stream_cursor_input: {
    initial_value: 'cosouls_stream_cursor_value_input',
    ordering: 'cursor_ordering',
  },
  cosouls_stream_cursor_value_input: {
    address: 'citext',
  },
  cursor_ordering: true,
  key_holders_aggregate_bool_exp: {
    count: 'key_holders_aggregate_bool_exp_count',
  },
  key_holders_aggregate_bool_exp_count: {
    arguments: 'key_holders_select_column',
    filter: 'key_holders_bool_exp',
    predicate: 'Int_comparison_exp',
  },
  key_holders_aggregate_fields: {
    count: {
      columns: 'key_holders_select_column',
    },
  },
  key_holders_aggregate_order_by: {
    avg: 'key_holders_avg_order_by',
    count: 'order_by',
    max: 'key_holders_max_order_by',
    min: 'key_holders_min_order_by',
    stddev: 'key_holders_stddev_order_by',
    stddev_pop: 'key_holders_stddev_pop_order_by',
    stddev_samp: 'key_holders_stddev_samp_order_by',
    sum: 'key_holders_sum_order_by',
    var_pop: 'key_holders_var_pop_order_by',
    var_samp: 'key_holders_var_samp_order_by',
    variance: 'key_holders_variance_order_by',
  },
  key_holders_avg_order_by: {
    amount: 'order_by',
  },
  key_holders_bool_exp: {
    _and: 'key_holders_bool_exp',
    _not: 'key_holders_bool_exp',
    _or: 'key_holders_bool_exp',
    address: 'citext_comparison_exp',
    address_cosoul: 'cosouls_bool_exp',
    amount: 'Int_comparison_exp',
    subject: 'citext_comparison_exp',
    subject_cosoul: 'cosouls_bool_exp',
    updated_at: 'timestamptz_comparison_exp',
  },
  key_holders_max_order_by: {
    address: 'order_by',
    amount: 'order_by',
    subject: 'order_by',
    updated_at: 'order_by',
  },
  key_holders_min_order_by: {
    address: 'order_by',
    amount: 'order_by',
    subject: 'order_by',
    updated_at: 'order_by',
  },
  key_holders_order_by: {
    address: 'order_by',
    address_cosoul: 'cosouls_order_by',
    amount: 'order_by',
    subject: 'order_by',
    subject_cosoul: 'cosouls_order_by',
    updated_at: 'order_by',
  },
  key_holders_select_column: true,
  key_holders_stddev_order_by: {
    amount: 'order_by',
  },
  key_holders_stddev_pop_order_by: {
    amount: 'order_by',
  },
  key_holders_stddev_samp_order_by: {
    amount: 'order_by',
  },
  key_holders_stream_cursor_input: {
    initial_value: 'key_holders_stream_cursor_value_input',
    ordering: 'cursor_ordering',
  },
  key_holders_stream_cursor_value_input: {
    address: 'citext',
    subject: 'citext',
    updated_at: 'timestamptz',
  },
  key_holders_sum_order_by: {
    amount: 'order_by',
  },
  key_holders_var_pop_order_by: {
    amount: 'order_by',
  },
  key_holders_var_samp_order_by: {
    amount: 'order_by',
  },
  key_holders_variance_order_by: {
    amount: 'order_by',
  },
  order_by: true,
  profiles_public_bool_exp: {
    _and: 'profiles_public_bool_exp',
    _not: 'profiles_public_bool_exp',
    _or: 'profiles_public_bool_exp',
    address: 'String_comparison_exp',
    avatar: 'String_comparison_exp',
    id: 'bigint_comparison_exp',
    name: 'citext_comparison_exp',
  },
  profiles_public_order_by: {
    address: 'order_by',
    avatar: 'order_by',
    id: 'order_by',
    name: 'order_by',
  },
  profiles_public_select_column: true,
  profiles_public_stream_cursor_input: {
    initial_value: 'profiles_public_stream_cursor_value_input',
    ordering: 'cursor_ordering',
  },
  profiles_public_stream_cursor_value_input: {
    id: 'bigint',
    name: 'citext',
  },
  query_root: {
    cosouls: {
      distinct_on: 'cosouls_select_column',
      order_by: 'cosouls_order_by',
      where: 'cosouls_bool_exp',
    },
    cosouls_by_pk: {},
    key_holders: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
    key_holders_aggregate: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
    key_holders_by_pk: {
      address: 'citext',
      subject: 'citext',
    },
    price_per_share: {},
    profiles_public: {
      distinct_on: 'profiles_public_select_column',
      order_by: 'profiles_public_order_by',
      where: 'profiles_public_bool_exp',
    },
  },
  subscription_root: {
    cosouls: {
      distinct_on: 'cosouls_select_column',
      order_by: 'cosouls_order_by',
      where: 'cosouls_bool_exp',
    },
    cosouls_by_pk: {},
    cosouls_stream: {
      cursor: 'cosouls_stream_cursor_input',
      where: 'cosouls_bool_exp',
    },
    key_holders: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
    key_holders_aggregate: {
      distinct_on: 'key_holders_select_column',
      order_by: 'key_holders_order_by',
      where: 'key_holders_bool_exp',
    },
    key_holders_by_pk: {
      address: 'citext',
      subject: 'citext',
    },
    key_holders_stream: {
      cursor: 'key_holders_stream_cursor_input',
      where: 'key_holders_bool_exp',
    },
    profiles_public: {
      distinct_on: 'profiles_public_select_column',
      order_by: 'profiles_public_order_by',
      where: 'profiles_public_bool_exp',
    },
    profiles_public_stream: {
      cursor: 'profiles_public_stream_cursor_input',
      where: 'profiles_public_bool_exp',
    },
  },
  timestamptz: 'String',
  timestamptz_comparison_exp: {
    _eq: 'timestamptz',
    _gt: 'timestamptz',
    _gte: 'timestamptz',
    _in: 'timestamptz',
    _lt: 'timestamptz',
    _lte: 'timestamptz',
    _neq: 'timestamptz',
    _nin: 'timestamptz',
  },
};

export const ReturnTypes: Record<string, any> = {
  cached: {
    ttl: 'Int',
    refresh: 'Boolean',
  },
  cosouls: {
    address: 'citext',
    held_keys: 'key_holders',
    held_keys_aggregate: 'key_holders_aggregate',
    id: 'Int',
    key_holders: 'key_holders',
    key_holders_aggregate: 'key_holders_aggregate',
    pgive: 'Int',
    profile_public: 'profiles_public',
    token_id: 'Int',
  },
  key_holders: {
    address: 'citext',
    address_cosoul: 'cosouls',
    amount: 'Int',
    subject: 'citext',
    subject_cosoul: 'cosouls',
    updated_at: 'timestamptz',
  },
  key_holders_aggregate: {
    aggregate: 'key_holders_aggregate_fields',
    nodes: 'key_holders',
  },
  key_holders_aggregate_fields: {
    avg: 'key_holders_avg_fields',
    count: 'Int',
    max: 'key_holders_max_fields',
    min: 'key_holders_min_fields',
    stddev: 'key_holders_stddev_fields',
    stddev_pop: 'key_holders_stddev_pop_fields',
    stddev_samp: 'key_holders_stddev_samp_fields',
    sum: 'key_holders_sum_fields',
    var_pop: 'key_holders_var_pop_fields',
    var_samp: 'key_holders_var_samp_fields',
    variance: 'key_holders_variance_fields',
  },
  key_holders_avg_fields: {
    amount: 'Float',
  },
  key_holders_max_fields: {
    address: 'citext',
    amount: 'Int',
    subject: 'citext',
    updated_at: 'timestamptz',
  },
  key_holders_min_fields: {
    address: 'citext',
    amount: 'Int',
    subject: 'citext',
    updated_at: 'timestamptz',
  },
  key_holders_stddev_fields: {
    amount: 'Float',
  },
  key_holders_stddev_pop_fields: {
    amount: 'Float',
  },
  key_holders_stddev_samp_fields: {
    amount: 'Float',
  },
  key_holders_sum_fields: {
    amount: 'Int',
  },
  key_holders_var_pop_fields: {
    amount: 'Float',
  },
  key_holders_var_samp_fields: {
    amount: 'Float',
  },
  key_holders_variance_fields: {
    amount: 'Float',
  },
  profiles_public: {
    address: 'String',
    avatar: 'String',
    id: 'bigint',
    name: 'citext',
  },
  query_root: {
    cosouls: 'cosouls',
    cosouls_by_pk: 'cosouls',
    key_holders: 'key_holders',
    key_holders_aggregate: 'key_holders_aggregate',
    key_holders_by_pk: 'key_holders',
    price_per_share: 'Float',
    profiles_public: 'profiles_public',
  },
  subscription_root: {
    cosouls: 'cosouls',
    cosouls_by_pk: 'cosouls',
    cosouls_stream: 'cosouls',
    key_holders: 'key_holders',
    key_holders_aggregate: 'key_holders_aggregate',
    key_holders_by_pk: 'key_holders',
    key_holders_stream: 'key_holders',
    profiles_public: 'profiles_public',
    profiles_public_stream: 'profiles_public',
  },
};

export const Ops = {
  query: 'query_root' as const,
  subscription: 'subscription_root' as const,
};
