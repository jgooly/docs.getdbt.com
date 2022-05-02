const sidebarSettings = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: ["docs/introduction", "docs/available-adapters", "docs/core-versions"],
    },
    {
      type: "category",
      label: "Building a dbt Project",
      collapsed: false,
      items: [
        "docs/building-a-dbt-project/projects",
        {
          type: "category",
          label: "Models",
          items: [
            "docs/building-a-dbt-project/building-models",
            "docs/building-a-dbt-project/building-models/materializations",
            "docs/building-a-dbt-project/building-models/configuring-incremental-models",
            "docs/building-a-dbt-project/building-models/using-custom-aliases",
            "docs/building-a-dbt-project/building-models/using-custom-schemas",
            "docs/building-a-dbt-project/building-models/using-custom-databases",
            "docs/building-a-dbt-project/building-models/using-variables",
          ],
        },
        "docs/building-a-dbt-project/tests",
        "docs/building-a-dbt-project/documentation",
        "docs/building-a-dbt-project/using-sources",
        "docs/building-a-dbt-project/seeds",
        "docs/building-a-dbt-project/snapshots",
        "docs/building-a-dbt-project/exposures",
        "docs/building-a-dbt-project/jinja-macros",
        "docs/building-a-dbt-project/hooks-operations",
        //"docs/building-a-dbt-project/dont-nest-your-curlies",
        //"docs/building-a-dbt-project/archival",
        "docs/building-a-dbt-project/package-management",
        "docs/building-a-dbt-project/analyses",
        "docs/building-a-dbt-project/metrics",
      ],
    },
    {
      type: "category",
      label: "Running a dbt Project",
      collapsed: false,
      items: [
        "docs/running-a-dbt-project/using-the-dbt-ide",
        "docs/running-a-dbt-project/using-the-cli",
        "docs/running-a-dbt-project/dbt-api",
        "docs/running-a-dbt-project/running-dbt-in-production",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "docs/guides/debugging-errors",
        "docs/guides/debugging-schema-names",
        "docs/guides/navigating-the-docs",
        "docs/guides/getting-help",
        "docs/guides/best-practices",
        "docs/guides/managing-environments",
        "docs/guides/writing-custom-generic-tests",
        "docs/guides/building-packages",
        "docs/guides/creating-new-materializations",
        "docs/guides/understanding-state",
        {
          type: "category",
          label: "Migration guides",
          link: {
            type: 'generated-index',
            title: 'Migration guides',
            description: 'Learn how to upgrade to the latest version of dbt Core.',
            slug: '/docs/guides/migration-guide',
          },
          items: [
            "docs/guides/migration-guide/upgrading-to-v1.1",
            "docs/guides/migration-guide/upgrading-to-v1.0",
            "docs/guides/migration-guide/upgrading-to-v0.21",
            "docs/guides/migration-guide/upgrading-to-v0.20",
            {
              type: "category",
              label: "Older versions",
              link: {
                type: 'generated-index',
                title: 'Migration guides',
                description: 'Learn how to upgrade from older versions of dbt Core.',
                slug: '/docs/guides/migration-guide/older-versions',
              },
              items: [
                "docs/guides/migration-guide/upgrading-to-0-19-0",
                "docs/guides/migration-guide/upgrading-to-0-18-0",
                "docs/guides/migration-guide/upgrading-to-0-17-0",
                "docs/guides/migration-guide/upgrading-to-0-16-0",
                "docs/guides/migration-guide/upgrading-to-0-15-0",
                "docs/guides/migration-guide/upgrading-to-0-14-1",
                "docs/guides/migration-guide/upgrading-to-0-14-0",
                "docs/guides/migration-guide/upgrading-to-0-13-0",
                "docs/guides/migration-guide/upgrading-to-0-12-0",
                "docs/guides/migration-guide/upgrading-to-0-11-0",
              ],
            },
          ],
        },
        "docs/guides/videos",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "docs/contributing/oss-expectations",
        "docs/contributing/contributor-license-agreements",
        "docs/contributing/building-a-new-adapter",
        "docs/contributing/testing-a-new-adapter",
        "docs/contributing/slack-rules-of-the-road",
      ],
    },
    {
      type: "category",
      label: "About",
      items: ["docs/about/license", "docs/about/viewpoint"],
    },
  ],
  "dbt CLI": [
    "dbt-cli/cli-overview",
    {
      type: "category",
      label: "Installing dbt from the command line",
      items: [
        "dbt-cli/install/overview",
        "dbt-cli/install/homebrew",
        "dbt-cli/install/pip",
        "dbt-cli/install/docker",
        "dbt-cli/install/from-source",
      ],
    },
    "dbt-cli/configure-your-profile",
  ],
  "dbt Cloud": [
    {
      type: "category",
      label: "Overview",
      link: { type: 'doc', id: 'docs/dbt-cloud/cloud-overview' },
      items: [
        'docs/dbt-cloud/cloud-quickstart',
      ],
    },
    {
      type: "category",
      label: "dbt Cloud IDE",
      items: [
        "docs/dbt-cloud/cloud-ide/the-dbt-ide",
        "docs/dbt-cloud/cloud-ide/handling-merge-conflicts",
        "docs/dbt-cloud/cloud-ide/viewing-docs-in-the-ide",
        "docs/dbt-cloud/cloud-ide/the-ide-git-button",
      ],
    },
    {
      type: "category",
      label: "Configuring dbt Cloud",
      items: [
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-your-database",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-using-a-managed-repository",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-configuring-repositories",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-installing-the-github-application",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-gitlab",
        {
          type: "category",
          label: "Connecting Azure DevOps",
          link: { type: 'doc', id: 'docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-azure-devops' }, 
          items: [
            'docs/dbt-cloud/cloud-configuring-dbt-cloud/setup-azure',
            'docs/dbt-cloud/cloud-configuring-dbt-cloud/authenticate-azure',
          ],
        }, 
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-import-a-project-by-git-url",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-choosing-a-dbt-version",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-upgrading-dbt-versions",
      ],
    },
    {
      type: "category",
      label: "Using dbt Cloud",
      link: {
        type: 'generated-index',
        title: 'Using dbt Cloud',
        description: 'Learn how you can use dbt Cloud.',
        slug: '/docs/dbt-cloud',
      },
      items: [
        "docs/dbt-cloud/using-dbt-cloud/cloud-enabling-continuous-integration",
        "docs/dbt-cloud/using-dbt-cloud/cloud-generating-documentation",
        "docs/dbt-cloud/using-dbt-cloud/cloud-snapshotting-source-freshness",
        "docs/dbt-cloud/using-dbt-cloud/artifacts",
        "docs/dbt-cloud/using-dbt-cloud/cloud-using-a-custom-cron-schedule",
        "docs/dbt-cloud/using-dbt-cloud/cloud-setting-a-custom-target-name",
        "docs/dbt-cloud/using-dbt-cloud/cloud-environment-variables",
        "docs/dbt-cloud/using-dbt-cloud/cloud-notifications",
        "docs/dbt-cloud/using-dbt-cloud/cloud-dashboard-status-tiles",
        "docs/dbt-cloud/using-dbt-cloud/cloud-model-timing-tab",
        "docs/dbt-cloud/using-dbt-cloud/cloud-metrics-layer",
      ],
    },
    {
      type: "category",
      label: "Access Control",
      items: [
        "docs/dbt-cloud/access-control/access-control-overview",
        "docs/dbt-cloud/access-control/cloud-seats-and-users",
        "docs/dbt-cloud/access-control/self-service-permissions",
        "docs/dbt-cloud/access-control/enterprise-permissions",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Enterprise",
      items: [
        "docs/dbt-cloud/dbt-cloud-enterprise",
        {
          type: "category",
          label: "Single Sign On",
          items: [
            "docs/dbt-cloud/dbt-cloud-enterprise/sso-overview",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-saml-2.0",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-google-gsuite",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-sso-with-azure-active-directory",
          ],
        },
        {
          type: "category",
          label: "Database Auth",
          items: [
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-snowflake-oauth",
            "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-setting-up-bigquery-oauth",
          ],
        },
        "docs/dbt-cloud/dbt-cloud-enterprise/audit-log",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Deployments",
      items: [
        "docs/dbt-cloud/deployments/deployment-overview",
        "docs/dbt-cloud/deployments/multi-tenant-deployment",
        "docs/dbt-cloud/deployments/single-tenant-deployment",
        "docs/dbt-cloud/deployments/deployment-architecture",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud APIs",
      items: [
        "docs/dbt-cloud/dbt-cloud-api/cloud-apis",
        {
          type: "category",
          label: "Authentication",
          items: [
            "docs/dbt-cloud/dbt-cloud-api/user-tokens",
            "docs/dbt-cloud/dbt-cloud-api/service-tokens",
          ],
        },
        "docs/dbt-cloud/dbt-cloud-api/admin-cloud-api",
        {
          type: "category",
          label: "Metadata API",
          items: [
            "docs/dbt-cloud/dbt-cloud-api/metadata/metadata-overview",
            "docs/dbt-cloud/dbt-cloud-api/metadata/metadata-querying",
            {
              type: "category",
              label: "Schema",
              items: [
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-model",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-models",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-metric",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-metrics",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-source",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-sources",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-seed",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-seeds",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-snapshots",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-test",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-tests",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-exposure",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-exposures",
              ],
            },
          ],
        },
      ],
    },
    "docs/dbt-cloud/cloud-dbt-cloud-support",
    "docs/dbt-cloud/cloud-changelog",
  ],
  reference: [
    {
      type: "category",
      label: "Project configs",
      items: [
        "reference/dbt_project.yml",
        "reference/project-configs/analysis-paths",
        "reference/project-configs/asset-paths",
        "reference/project-configs/clean-targets",
        "reference/project-configs/config-version",
        "reference/project-configs/seed-paths",
        "reference/project-configs/dispatch-config",
        "reference/project-configs/docs-paths",
        "reference/project-configs/log-path",
        "reference/project-configs/macro-paths",
        "reference/project-configs/packages-install-path",
        "reference/project-configs/name",
        "reference/project-configs/on-run-start-on-run-end",
        "reference/project-configs/profile",
        "reference/project-configs/query-comment",
        "reference/project-configs/quoting",
        "reference/project-configs/require-dbt-version",
        "reference/project-configs/snapshot-paths",
        "reference/project-configs/model-paths",
        "reference/project-configs/target-path",
        "reference/project-configs/test-paths",
        "reference/project-configs/version",
      ],
    },
    {
      type: "category",
      label: "Adapter-specific configs",
      items: [
        "reference/resource-configs/postgres-configs",
        "reference/resource-configs/bigquery-configs",
        "reference/resource-configs/redshift-configs",
        "reference/resource-configs/snowflake-configs",
        "reference/resource-configs/spark-configs",
        "reference/resource-configs/firebolt-configs",
        "reference/resource-configs/teradata-configs",
      ],
    },
    {
      type: "category",
      label: "Resource configs and properties",
      items: [
        "reference/configs-and-properties",
        {
          type: "category",
          label: "General properties",
          items: [
            "reference/resource-properties/columns",
            "reference/resource-properties/config",
            "reference/resource-properties/description",
            "reference/resource-properties/docs",
            "reference/resource-properties/quote",
            "reference/resource-properties/tests",
          ],
        },
        {
          type: "category",
          label: "General configs",
          items: [
            "reference/resource-configs/alias",
            "reference/resource-configs/database",
            "reference/resource-configs/enabled",
            "reference/resource-configs/full_refresh",
            "reference/resource-configs/persist_docs",
            "reference/resource-configs/pre-hook-post-hook",
            "reference/resource-configs/schema",
            "reference/resource-configs/tags",
            "reference/resource-configs/meta",
            "reference/advanced-config-usage",
            "reference/resource-configs/plus-prefix",
          ],
        },
        {
          type: "category",
          label: "For models",
          items: [
            "reference/model-properties",
            "reference/model-configs",
            "reference/resource-configs/materialized",
            "reference/resource-configs/sql_header",
          ],
        },
        {
          type: "category",
          label: "For seeds",
          items: [
            "reference/seed-properties",
            "reference/seed-configs",
            "reference/resource-configs/column_types",
            "reference/resource-configs/quote_columns",
          ],
        },
        {
          type: "category",
          label: "For snapshots",
          items: [
            "reference/snapshot-properties",
            "reference/snapshot-configs",
            "reference/resource-configs/check_cols",
            "reference/resource-configs/strategy",
            "reference/resource-configs/target_database",
            "reference/resource-configs/target_schema",
            "reference/resource-configs/unique_key",
            "reference/resource-configs/updated_at",
            "reference/resource-configs/invalidate_hard_deletes",
          ],
        },
        {
          type: "category",
          label: "For tests",
          items: [
            "reference/test-configs",
            "reference/resource-configs/fail_calc",
            "reference/resource-configs/limit",
            "reference/resource-configs/severity",
            "reference/resource-configs/store_failures",
            "reference/resource-configs/where",
          ],
        },
        {
          type: "category",
          label: "For sources",
          items: [
            "reference/source-properties",
            "reference/source-configs",
            "reference/resource-properties/database",
            "reference/resource-properties/external",
            "reference/resource-properties/freshness",
            "reference/resource-properties/identifier",
            "reference/resource-properties/loader",
            "reference/resource-properties/quoting",
            "reference/resource-properties/schema",
            "reference/resource-properties/overrides",
          ],
        },
        {
          type: "category",
          label: "For analyses",
          items: [
            "reference/analysis-properties",
          ],
        },
        {
          type: "category",
          label: "For exposures",
          items: [
            "reference/exposure-properties",
          ],
        },
        {
          type: "category",
          label: "For macros",
          items: [
            "reference/macro-properties",
            "reference/resource-properties/argument-type"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Commands",
      items: [
        "reference/dbt-commands",
        {
          type: "category",
          label: "Node selection",
          items: [
            "reference/node-selection/syntax",
            "reference/node-selection/graph-operators",
            "reference/node-selection/set-operators",
            "reference/node-selection/exclude",
            "reference/node-selection/methods",
            "reference/node-selection/putting-it-together",
            "reference/node-selection/yaml-selectors",
            "reference/node-selection/test-selection-examples",
            "reference/node-selection/defer",
            "reference/node-selection/state-comparison-caveats",
          ],
        },
        {
          type: "category",
          label: "List of commands",
          items: [
            "reference/commands/build",
            "reference/commands/clean",
            "reference/commands/cmd-docs",
            "reference/commands/compile",
            "reference/commands/debug",
            "reference/commands/deps",
            "reference/commands/init",
            "reference/commands/list",
            "reference/commands/parse",
            "reference/commands/rpc",
            "reference/commands/run",
            "reference/commands/run-operation",
            "reference/commands/seed",
            "reference/commands/snapshot",
            "reference/commands/source",
            "reference/commands/test",
          ],
        },
        "reference/global-cli-flags",
        "reference/global-configs",
        "reference/events-logging",
        "reference/exit-codes",
        "reference/parsing",
      ],
    },
    {
      type: "category",
      label: "Jinja Reference",
      items: [
        {
      type: "category",
      label: "dbt Jinja functions",
      link: {
        type: 'generated-index',
        title: 'dbt Jinja functions',
        description: 'In addition to the standard Jinja library, we\'ve added additional functions and variables to the Jinja context that are useful when working with a dbt project.',
        slug: '/reference/dbt-jinja-functions',
      },
      items: [
        {
          type: "autogenerated",
          dirName: "reference/dbt-jinja-functions",
        },
      ],
    },
        "reference/dbt-classes",
      ],
    },
    {
      type: "category",
      label: "Profiles (CLI only)",
      items: [
        "reference/profiles.yml",
        "reference/warehouse-profiles/bigquery-profile",
        "reference/warehouse-profiles/postgres-profile",
        "reference/warehouse-profiles/redshift-profile",
        "reference/warehouse-profiles/snowflake-profile",
        "reference/warehouse-profiles/mssql-profile",
        "reference/warehouse-profiles/trino-profile",
        "reference/warehouse-profiles/singlestore-profile",
        "reference/warehouse-profiles/spark-profile",
        "reference/warehouse-profiles/databricks-profile",
        "reference/warehouse-profiles/exasol-profile",
        "reference/warehouse-profiles/oracle-profile",
        "reference/warehouse-profiles/azuresynapse-profile",
        "reference/warehouse-profiles/dremio-profile",
        "reference/warehouse-profiles/clickhouse-profile",
        "reference/warehouse-profiles/materialize-profile",
        "reference/warehouse-profiles/rockset-profile",
        "reference/warehouse-profiles/firebolt-profile",
        "reference/warehouse-profiles/teradata-profile",
        "reference/warehouse-profiles/athena-profile",
        "reference/warehouse-profiles/vertica-profile",
        "reference/warehouse-profiles/tidb-profile",
      ],
    },
    {
      type: "category",
      label: "dbt Artifacts",
      items: [
        "reference/artifacts/dbt-artifacts",
        "reference/artifacts/manifest-json",
        "reference/artifacts/run-results-json",
        "reference/artifacts/catalog-json",
        "reference/artifacts/sources-json",
        "reference/artifacts/other-artifacts",
      ],
    },
  ],
  
  "FAQs": [
    {
      type: "category",
      label: "Models",
      link: { type: 'doc', id: 'docs/faqs/models' }, 
      items: [
        "https://docs.getdbt.com/faqs/available-configurations",
        "https://docs.getdbt.com/faqs/configurable-model-path",
        "https://docs.getdbt.com/faqs/create-a-schema",
        "https://docs.getdbt.com/faqs/define-a-column-type",
        "https://docs.getdbt.com/faqs/insert-records",
        "https://docs.getdbt.com/faqs/model-custom-schemas",
        "https://docs.getdbt.com/faqs/multiple-resource-yml-files",
        "https://docs.getdbt.com/faqs/reference-models-in-another-project",
        "https://docs.getdbt.com/faqs/removing-deleted-models",
        "https://docs.getdbt.com/faqs/run-downstream-of-seed",
        "https://docs.getdbt.com/faqs/run-downtime",
        "https://docs.getdbt.com/faqs/run-one-model",
        "https://docs.getdbt.com/faqs/running-models-downstream-of-source",
        "https://docs.getdbt.com/faqs/source-has-bad-name",
        "https://docs.getdbt.com/faqs/source-in-different-database",
        "https://docs.getdbt.com/faqs/source-quotes",
        "https://docs.getdbt.com/faqs/sql-dialect",
        "https://docs.getdbt.com/faqs/test-one-model",
        "https://docs.getdbt.com/faqs/unique-model-names",          
      ],
    },
    {
      type: "category",
      label: "Tests",
      link: { type: 'doc', id: 'docs/faqs/tests' }, 
      items: [
        "https://docs.getdbt.com/faqs/configurable-data-path",
        "https://docs.getdbt.com/faqs/configurable-data-test-path",
        "https://docs.getdbt.com/faqs/load-raw-data-with-seed",
        "https://docs.getdbt.com/faqs/multiple-test-files",
        "https://docs.getdbt.com/faqs/properties-not-in-config",
        "https://docs.getdbt.com/faqs/recommended-tests",
        "https://docs.getdbt.com/faqs/test-one-model",
        "https://docs.getdbt.com/faqs/testing-seeds",
        "https://docs.getdbt.com/faqs/testing-sources",
        "https://docs.getdbt.com/faqs/uniqueness-two-columns",
        "https://docs.getdbt.com/faqs/when-to-test",
      ],
    },
    {
      type: "category",
      label: "Warehouse",
      link: { type: 'doc', id: 'docs/faqs/warehouse' }, 
      items: [
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-your-database",
        "https://docs.getdbt.com/faqs/bq-impersonate-service-account-setup",
        "https://docs.getdbt.com/faqs/bq-impersonate-service-account-why",
        "https://docs.getdbt.com/faqs/database-privileges",
        "https://docs.getdbt.com/faqs/loading-data",   
      ],
    },
    {
      type: "category",
      label: "Security",
      link: { type: 'doc', id: 'docs/faqs/security' }, 
      items: [
         
      ],
    },
    {
      type: "category",
      label: "Environments",
      link: { type: 'doc', id: 'docs/faqs/environments' }, 
      items: [
        "https://docs.getdbt.com/docs/guides/managing-environments",
        "https://docs.getdbt.com/docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-choosing-a-dbt-version#environments",
        "https://docs.getdbt.com/faqs/beta-release",
        "https://docs.getdbt.com/faqs/profile-env-vars",
        "https://docs.getdbt.com/faqs/profile-name",
      ],
    },
    {
      type: "category",
      label: "Accounts",
      link: { type: 'doc', id: 'docs/faqs/accounts' }, 
      items: [
        "https://docs.getdbt.com/faqs/configurable-snapshot-path",
        "https://docs.getdbt.com/faqs/dbt-specific-jinja",
        "
      ],
    },
    {
      type: "category",
      label: "Project",
      link: { type: 'doc', id: 'docs/faqs/project' }, 
      items: [
        "https://docs.getdbt.com/faqs/configurable-snapshot-path",
        "https://docs.getdbt.com/faqs/dbt-specific-jinja",
        "https://docs.getdbt.com/faqs/debugging-jinja",
        "https://docs.getdbt.com/faqs/define-a-column-type",
        "https://docs.getdbt.com/faqs/docs-for-multiple-projects",
        "https://docs.getdbt.com/faqs/example-projects",
        "https://docs.getdbt.com/faqs/multiple-resource-yml-files",
        "https://docs.getdbt.com/faqs/profile-name",
        "https://docs.getdbt.com/faqs/project-name",
        "https://docs.getdbt.com/faqs/properties-not-in-config",
        "https://docs.getdbt.com/faqs/quoting-column-names",
        "https://docs.getdbt.com/faqs/schema-yml-name",
        "https://docs.getdbt.com/faqs/seed-datatypes",
        "https://docs.getdbt.com/faqs/separate-profile",
        "https://docs.getdbt.com/faqs/snapshot-freshness-output",
        "https://docs.getdbt.com/faqs/source-has-bad-name",
        "https://docs.getdbt.com/faqs/source-in-different-database",
        "https://docs.getdbt.com/faqs/specifying-column-types",
        "https://docs.getdbt.com/faqs/sql-dialect",
        "https://docs.getdbt.com/faqs/structure-a-project",
        "https://docs.getdbt.com/faqs/unique-model-names",
        "https://docs.getdbt.com/faqs/which-schema",
        "https://docs.getdbt.com/faqs/why-not-write-dml",
        "https://docs.getdbt.com/faqs/why-so-many-macros",
        "https://docs.getdbt.com/faqs/why-version-2",
        "https://docs.getdbt.com/faqs/yaml-file-extension",
      ],
    },
    {
      type: "category",
      label: "Docs",
      link: { type: 'doc', id: 'docs/faqs/docs' }, 
      items: [
        "https://docs.getdbt.com/faqs/docs-for-multiple-projects",
        "https://docs.getdbt.com/faqs/document-all-columns",
        "https://docs.getdbt.com/faqs/document-other-resources",
        "https://docs.getdbt.com/faqs/documenting-macros",
        "https://docs.getdbt.com/faqs/long-descriptions",
        "https://docs.getdbt.com/faqs/sharing-documentation",
        "https://docs.getdbt.com/faqs/testing-seeds",
      ],
    },
    {
      type: "category",
      label: "Runs",
      link: { type: 'doc', id: 'docs/faqs/runs' }, 
      items: [
        "https://docs.getdbt.com/faqs/checking-logs",
        "https://docs.getdbt.com/faqs/failed-prod-run",
        "https://docs.getdbt.com/faqs/failed-tests",
        "https://docs.getdbt.com/faqs/run-downstream-of-seed",
        "https://docs.getdbt.com/faqs/run-downtime",
        "https://docs.getdbt.com/faqs/run-one-model",
        "https://docs.getdbt.com/faqs/run-one-snapshot",
        "https://docs.getdbt.com/faqs/running-models-downstream-of-source",
        "https://docs.getdbt.com/faqs/snapshot-frequency",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      link: { type: 'doc', id: 'docs/faqs/troubleshooting' }, 
      items: [
        "https://docs.getdbt.com/faqs/debugging-jinja",
        "https://docs.getdbt.com/faqs/dispatch-could-not-find-package",
        "https://docs.getdbt.com/faqs/failed-tests",
        "https://docs.getdbt.com/faqs/full-refresh-seed",
        "https://docs.getdbt.com/faqs/jinja-whitespace",
        "https://docs.getdbt.com/faqs/sql-errors",
        "https://docs.getdbt.com/faqs/unused-model-configurations",
        "
      ],
    },
    {
      type: "category",
      label: "Commonly Asked Questions",
      link: { type: 'doc', id: 'docs/faqs/commonly-asked' }, 
      items: [
       ## need to reassess and shorten number of faqs##
      ## need Accounts, HIPPA/BAA/ reassess and shorten number of faqs##
      ],
    },
    {
      type: "category",
      label: "Git",
      link: { type: 'doc', id: 'docs/faqs/git' }, 
      items: [
       
      ],
    },
    {
      type: "category",
      label: "Jinja",
      link: { type: 'doc', id: 'docs/faqs/jinja' }, 
      items: [
        "https://docs.getdbt.com/faqs/dbt-specific-jinja",
        "https://docs.getdbt.com/faqs/debugging-jinja",
        "https://docs.getdbt.com/faqs/quoting-column-names",
        "https://docs.getdbt.com/faqs/which-jinja-docs",
      ],
    },
    {
      type: "category",
      label: "Seeds",
      link: { type: 'doc', id: 'docs/faqs/seeds' }, 
      items: [
        "https://docs.getdbt.com/faqs/build-one-seed",
        "https://docs.getdbt.com/faqs/full-refresh-seed",
        "https://docs.getdbt.com/faqs/load-raw-data-with-seed",
        "https://docs.getdbt.com/faqs/run-downstream-of-seed",
        "https://docs.getdbt.com/faqs/seed-datatypes",
        "https://docs.getdbt.com/faqs/seed-hooks",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        "docs.getdbt.com/faqs/troubleshooting",
        {
          type: "category",
          label: "IDE",
		
          items: [
            "https://docs.getdbt.com/faqs/unused-model-configurations",
            "https://docs.getdbt.com/faqs/sql-errors",
	    "https://docs.getdbt.com/faqs/jinja-whitespace",
 	    "https://docs.getdbt.com/faqs/dispatch-could-not-find-package",
          ],
        },
        {
        type: "category",
        label: "Git",
	items: [
	   {
            type: 'autogenerated',
	    dirName: 'git' // Generate sidebar slice from docs/faqs/git
	   },
          ],
        },
       {
          type: "category",
          label: "Accounts and Permissions",
          items: [
	   {
            type: 'autogenerated',
	    dirName: 'accounts' // Generate sidebar slice from docs/faqs/accounts
	   },
          ],
        },
       {
          type: "category",
          label: "Warehouse",
	  link: { type: 'doc', id: 'docs/faqs/warehouse' },
          items: [
            "https://docs.getdbt.com/faqs/connecting-to-two-dbs-not-allowed",
	    "https://docs.getdbt.com/faqs/database-privileges",
	    "https://docs.getdbt.com/faqs/loading-data",
	    "https://docs.getdbt.com/faqs/bq-impersonate-service-account-setup",
	    "https://docs.getdbt.com/faqs/bq-impersonate-service-account-why",
	    "/docs/faqs/diff-database-environment",
          ],
        },
        {
         type: "category",
          label: "API",
          items: [
            "need md files",
          ],
        },
        {
      ],
    },
    {
      
  
      
      
  
  
  ----
  
  
  
  
  tutorial: [
    {
      type: "category",
      label: "Getting Started with dbt Cloud",
      link: { type: 'doc', id: 'tutorial/getting-started' },
      items: [
        {
          type: "category",
          label: "Getting set up",
          link: { type: 'doc', id: 'tutorial/getting-set-up' },
          items: [
            "tutorial/getting-set-up/setting-up-bigquery",
            "tutorial/getting-set-up/setting-up-databricks",
            "tutorial/getting-set-up/setting-up-redshift",
            "tutorial/getting-set-up/setting-up-snowflake",
          ],
        },
        {
          type: "category",
          label: "Building your first project",
            link: { type: 'doc', id: 'tutorial/building-your-first-project' },
          items: [
            "tutorial/building-your-first-project/build-your-first-models",
            "tutorial/building-your-first-project/test-and-document-your-project",
            "tutorial/building-your-first-project/schedule-a-job",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Learning more",
      link: { type: 'doc', id: 'tutorial/learning-more' },
      items: [
        "tutorial/learning-more/getting-started-dbt-core",
        "tutorial/learning-more/using-jinja",
        "tutorial/learning-more/refactoring-legacy-sql",
      ],
    },
  ],
  "Glossary": [
    {
      type: "category",
      label: "Analytics Engineer Glossary",
      link: {
        type: 'generated-index',
        title: 'Analytics Engineering Glossary',
        description: 'The Analytics Engineering Glossary is a living collection of terms & concepts commonly used in the data industry by dbt Labs. You can use and contribute to this resource to educate yourself, your team, and your stakeholders.',
        slug: '/glossary',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'terms'
        },
      ],
    },
  ],
};


module.exports = sidebarSettings
