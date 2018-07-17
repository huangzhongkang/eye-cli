import Vue from 'vue'
import Router from 'vue-router'

/** 威胁侦测 **/
import operationalPerspective
  from '@/components/pages/threat-detection/operational-perspective/operational-perspective.vue'

/** 决策分析 **/
import attackAnalysis from '@/components/pages/decision-analysis/attack-analysis/attack-analysis'
import assetsAnalysis from '@/components/pages/decision-analysis/assets-analysis/assets-analysis'
import attackDistribution from '@/components/pages/decision-analysis/attack-distribution/attack-distribution'

/** 威胁预警 **/
import emailWarning from '@/components/pages/threat-warning/email-warning/email-warning'
import smsWarning from '@/components/pages/threat-warning/sms-warning/sms-warning'

/** 威胁处置 **/
import attackBlock from '@/components/pages/threat-disposal/attack-block/attack-block'
import jointDefense from '@/components/pages/threat-disposal/joint-defense/joint-defense'

/** 威胁报告 **/
import threatReport from '@/components/pages/threat-report/threat-report'
import currentReport from '@/components/pages/threat-report/children/current-report/current-report'
import securityWeekly from '@/components/pages/threat-report/children/security-weekly/security-weekly'
import securityMonth from '@/components/pages/threat-report/children/security-month/security-month'
import securitySeason from '@/components/pages/threat-report/children/security-season/security-season'
import securityYear from '@/components/pages/threat-report/children/security-year/security-year'

/** 规则配置 **/
import ruleConfig from '@/components/pages/rule-config/rule-config'
import ruleManage from '@/components/pages/rule-config/rule-manage/rule-manage'
import ruleStrategy from '@/components/pages/rule-config/rule-strategy/rule-strategy'
import ruleEntry from '@/components/pages/rule-config/rule-entry/rule-entry'
import ruleCombination from '@/components/pages/rule-config/rule-entry/children/rule-combination'
import ruleRequest from '@/components/pages/rule-config/rule-entry/children/rule-request'
import ruleReturn from '@/components/pages/rule-config/rule-entry/children/rule-return'
import ruleCommon from '@/components/pages/rule-config/rule-entry/children/rule-common'
import ruleType from '@/components/pages/rule-config/rule-entry/children/rule-type'
import ruleTool from '@/components/pages/rule-config/rule-entry/children/rule-tool'

/** 业务配置 **/
import businessConfig from '@/components/pages/business-config/assets-config/assets-config'
import assetsGrouping from '@/components/pages/business-config/assets-config/children/assets-grouping'
import assetsNote from '@/components/pages/business-config/assets-config/children/assets-note'
import manageOperation from '@/components/pages/business-config/assets-config/children/manage-operation'
import globalConfig from '@/components/pages/business-config/global-config/global-config'
import sensitivePortConfig from '@/components/pages/business-config/sensitive-port-config/sensitive-port-config'

/** 系统配置 **/
import userManage from '@/components/pages/system-config/user-manage/user-manage.vue'
import factoryConfig from '@/components/pages/system-config/factory-config/factory-config.vue'

Vue.use(Router);

export default new Router({
  routes: [
    /** 威胁侦测 **/
    {
      path: '/',
      // path: '/operationalPerspective',
      name: 'operationalPerspective',
      component: operationalPerspective
    },

    /** 决策分析 **/
    {
      path: '/decisionAnalysis/attackAnalysis',
      name: '',
      component: attackAnalysis
    },
    {
      path: '/decisionAnalysis/assetsAnalysis',
      name: '',
      component: assetsAnalysis
    },
    {
      path: '/decisionAnalysis/attackDistribution',
      name: '',
      component: attackDistribution
    },

    /** 威胁预警 **/
    {
      path: '/threatWarning/emailWarning',
      name: '',
      component: emailWarning
    },
    {
      path: '/threatWarning/smsWarning',
      name: '',
      component: smsWarning
    },

    /** 威胁处置 **/
    {
      path: '/threatDisposal/attackBlock',
      name: '',
      component: attackBlock
    },
    {
      path: '/threatDisposal/jointDefense',
      name: '',
      component: jointDefense
    },

    /** 威胁报告 **/
    {
      path: '/threatReport',
      name: '',
      component: threatReport,
      children: [
        {
          path: '/threatReport/currentReport',
          name: '',
          component: currentReport,
        },
        {
          path: '/threatReport/securityWeeklyReport',
          name: '',
          component: securityWeekly,
        },
        {
          path: '/threatReport/securityMonthReport',
          name: '',
          component: securityMonth,
        },
        {
          path: '/threatReport/securitySeasonReport',
          name: '',
          component: securitySeason,
        },
        {
          path: '/threatReport/securityYearReport',
          name: '',
          component: securityYear,
        }
      ]
    },

    /** 规则配置 **/
    {
      path: '/ruleConfig',
      name: '',
      component: ruleConfig,
      children: [
        {
          path: '/ruleConfig/ruleManage',
          name: '',
          component: ruleManage
        },
        {
          path: '/ruleConfig/ruleStrategy',
          name: '',
          component: ruleStrategy
        },
        {
          path: '/ruleConfig/ruleEntry',
          name: '',
          component: ruleEntry,
          children: [
            {
              path: '/ruleConfig/ruleEntry/ruleCombination',
              name: '',
              component: ruleCombination
            },
            {
              path: '/ruleConfig/ruleEntry/ruleRequest',
              name: '',
              component: ruleRequest
            },
            {
              path: '/ruleConfig/ruleEntry/ruleReturn',
              name: '',
              component: ruleReturn
            },
            {
              path: '/ruleConfig/ruleEntry/ruleCommon',
              name: '',
              component: ruleCommon
            },
            {
              path: '/ruleConfig/ruleEntry/ruleType',
              name: '',
              component: ruleType
            },
            {
              path: '/ruleConfig/ruleEntry/ruleTool',
              name: '',
              component: ruleTool
            }
          ]
        }
      ]
    },

    /** 业务配置 **/
    {
      path: '/businessConfig',
      name: '',
      component: businessConfig,
      children: [
        {
          path: '/assetsConfig/assetsGrouping',
          name: '',
          component: assetsGrouping
        },
        {
          path: '/assetsConfig/assetsNote',
          name: '',
          component: assetsNote
        },
        {
          path: '/assetsConfig/manageOperation',
          name: '',
          component: manageOperation
        },
        {
          path: '/assetsConfig/globalConfig',
          name: '',
          component: globalConfig
        },
        {
          path: '/assetsConfig/sensitivePortConfig',
          name: '',
          component: sensitivePortConfig
        }
      ]
    },

    /** 系统配置 **/
    {
      path: '/systemConfig/userManage',
      name: 'user-manage',
      component: userManage
    },
    {
      path: '/systemConfig/factoryConfig',
      name: '',
      component: factoryConfig
    }
  ]
})
