import{bG as o,bH as q,r as m,C as j,aB as u,t as U,F as M,I as E,G as b,H as v,bI as S,bJ as O}from"./vendor-405a226c.js";import{g as w,s as P}from"./exhibitionId-ticket-2a0701ba.js";import{a as T}from"./applloClient-722eb5fa.js";import{_ as k}from"./ticket-dca8eb03.js";import{a as B}from"./vant-309f5806.js";import"./element-plus-073a5f1e.js";const F=""+new URL("../jpg/logo-f30f42d3.jpg",import.meta.url).href,z=o`
  query {
    project{
      list {
        id
        name
        creationTime
        creatorId
        deleterId
        deletionTime
        isDeleted
        lastModificationTime
        lastModifierId
      }
    }
  }
`;o`
  query($id: UUID!) {
    project{
      detail(id: $id) {
        id
        name
        creationTime
        creatorId
        deleterId
        deletionTime
        isDeleted
        lastModificationTime
        lastModifierId
      }
    }
  }
`;o`
  mutation($entity: ProjectCreateDtoInput!) {
    project {
      create(entity: $entity)
    }
  }
`;o`
  mutation($id: UUID!) {
    project {
      delete(id: $id)
    }
  }
`;o`
  mutation($body: Any, $id: UUID!) { 
    project {
      update(body: $body, id: $id)
    }
  }
`;o`
  query($query: ExhibitionPagedQueryInput!) {
    exhibition {
      page(query: $query) {
        page
        size
        hasNextPage
        totalCount
        totalPages
        items {
            organizer{
                enterprise {
                    name
                }
            }
          extendedProperties
          organizerId
          projectId
          name
          nameEn
          shortName
          shortNameEn
          startDate
          endDate
          address{
            country
            province
            city
            county
          }
          hall
          standardBoothArea
          remark
          isEnabled
          enabledTime
          isForbid
          forbidTime
          forbidRemark
          industry{
            name
            treeName
          }
          lastModificationTime
          lastModifierId
          creationTime
          creatorId
          id
        }
      }
    }
  }
`;o`
  query($id: UUID!) {
    exhibition {
      async(id: $id) {
        address
        banners
        bannersEn
        creationTime
        creatorId
        dMCExId
        deleterId
        deletionTime
        email
        endTime
        footerContent
        footerContentEn
        id
        isDeleted
        isEnableNormalAddPeers
        isEnableNormalAddPeersEn
        isEnableNormalPoster
        isEnableNormalPosterEn
        isEnableNormalVisitorReg
        isEnableNormalVisitorRegActivityReg
        isEnableNormalVisitorRegEn
        isEnableNormalVisitorRegFreeRegBus
        isEnableNormalVisitorRegPayment
        isEnableNormalVisitorRegPaymentEn
        isEnableNormalVisitorRegRealname
        isEnableNormalVisitorRegRealnameEn
        isEnableProfessionalAddPeers
        isEnableProfessionalAddPeersEn
        isEnableProfessionalAudit
        isEnableProfessionalAuditEn
        isEnableProfessionalPoster
        isEnableProfessionalPosterEn
        isEnableProfessionalVisitorReg
        isEnableProfessionalVisitorRegActivityReg
        isEnableProfessionalVisitorRegEn
        isEnableProfessionalVisitorRegFreeRegBus
        isEnableProfessionalVisitorRegPayment
        isEnableProfessionalVisitorRegPaymentEn
        isEnableProfessionalVisitorRegRealname
        isEnableProfessionalVisitorRegRealnameEn
        isEnablePush
        isEnablePushEn
        isEnabled
        isOpenOthersCompanyType
        isOpenOthersCompanyTypeEn
        lastModificationTime
        lastModifierId
        linkName
        locationEnglish
        locationTraditional
        name
        nameEn
        nameTraditional
        normalVisitorRegEndTime
        normalVisitorRegEndTimeEn
        normalVisitorRegPaymentAmount
        normalVisitorRegPaymentAmountEn
        normalVisitorRegStartTime
        normalVisitorRegStartTimeEn
        phone
        professionalVisitorRegEndTime
        professionalVisitorRegEndTimeEn
        professionalVisitorRegPaymentAmount
        professionalVisitorRegPaymentAmountEn
        professionalVisitorRegStartTime
        professionalVisitorRegStartTimeEn
        projectId
        pushAppId
        pushPrimaryKey
        startTime
        wapFooterContent
        wapFooterContentEn
      }
    }
  }
`;o`
  query($id: UUID!) {
    exhibition {
      get(id: $id) {
        extendedProperties
        organizerId
        projectId
        name
        nameEn
        shortName
        shortNameEn
        startDate
        endDate
        address{
          country
          province
          city
          county
        }
        hall
        standardBoothArea
        remark
        isEnabled
        enabledTime
        isForbid
        forbidTime
        forbidRemark
        industry{
          name
          treeName
        }
        lastModificationTime
        lastModifierId
        creationTime
        creatorId
        id
      }
    }
  }
`;o`
  mutation($input: ExhibitionCreateCommandInput!) {
    exhibition {
      create (input: $input)
    }
  }
`;o`
  mutation($id: UUID!, $body: Any!) {
    exhibition {
      update (id: $id, body: $body)
    }
  }
`;o`
  mutation($id:UUID!) {
    exhibition {
      delete (id: $id)
    }
  }
`;o`
  query($id: UUID!) {
    exhibition {
      overdueSetting(id: $id) {
        boothOverdueRetainedTime
        boothOverdueRecoveryMethod
        contractOverdueRetainedTime
        contractOverdueRecoveryMethod
      }
    }
  }
`;o`
  mutation($id:UUID!, $input: ExhibitionOverdueSettingDtoInput!) {
    exhibition {
      updateOverdueSetting (id: $id, input: $input)
    }
  }
`;const H=o`
  query($query: ExhibitionPagedQueryInput!) {
    exhibition {
      page(query: $query) {
        page
        size
        hasNextPage
        hasPreviousPage
        totalCount
        totalPages
        items {
          address
          banners
          bannersEn
          bannersSc
          chargeCurrency
          chargeDisplayName
          chargeDisplayNameEn
          chargeDisplayNameTraditional
          creationTime
          creatorId
          deleterId
          deletionTime
          dMCExId
          email
          endTime
          footerContent
          footerContentEn
          id
          isDeleted
          isEnabled
          isEnabledCharge
          isEnabledInvoice
          isEnableNormalAddPeers
          isEnableNormalAddPeersEn
          isEnableNormalPoster
          isEnableNormalPosterEn
          isEnableNormalVisitorReg
          isEnableNormalVisitorRegActivityReg
          isEnableNormalVisitorRegEn
          isEnableNormalVisitorRegFreeRegBus
          isEnableNormalVisitorRegPayment
          isEnableNormalVisitorRegPaymentEn
          isEnableNormalVisitorRegRealname
          isEnableNormalVisitorRegRealnameEn
          isEnableProfessionalAddPeers
          isEnableProfessionalAddPeersEn
          isEnableProfessionalAudit
          isEnableProfessionalAuditEn
          isEnableProfessionalPoster
          isEnableProfessionalPosterEn
          isEnableProfessionalVisitorReg
          isEnableProfessionalVisitorRegActivityReg
          isEnableProfessionalVisitorRegEn
          isEnableProfessionalVisitorRegFreeRegBus
          isEnableProfessionalVisitorRegPayment
          isEnableProfessionalVisitorRegPaymentEn
          isEnableProfessionalVisitorRegRealname
          isEnableProfessionalVisitorRegRealnameEn
          isEnablePush
          isEnablePushEn
          isOpenOthersCompanyType
          isOpenOthersCompanyTypeEn
          isOpenRegEnabled
          isRealNameEnabled
          lastModificationTime
          lastModifierId
          linkName
          locationEnglish
          locationTraditional
          name
          nameEn
          nameTraditional
          normalVisitorRegEndTime
          normalVisitorRegEndTimeEn
          normalVisitorRegPaymentAmount
          normalVisitorRegPaymentAmountEn
          normalVisitorRegStartTime
          normalVisitorRegStartTimeEn
          openRegEndTime
          openRegStartTime
          phone
          professionalVisitorRegEndTime
          professionalVisitorRegEndTimeEn
          professionalVisitorRegPaymentAmount
          professionalVisitorRegPaymentAmountEn
          professionalVisitorRegStartTime
          professionalVisitorRegStartTimeEn
          projectId
          pushAppId
          pushPrimaryKey
          startTime
          venue
          wapFooterContent
          wapFooterContentEn
        }
      }
    }
  }
`;const N=p=>(S("data-v-2ebac653"),p=p(),O(),p),G={class:"pda-container"},L={class:"pda-home"},X=N(()=>E("div",{class:"pda-img"},[E("img",{src:F,alt:"logo"})],-1)),J={class:"pda-box"},K=N(()=>E("div",{class:"pda-footer"}," ©香港美縱展覽有限公司 版權所有 ",-1)),Q={setup(p){const _=q(),d=m(!1),g=m(""),y=m([]),f=m([]),c=m({}),R=e=>{g.value=e.name,y.value=[e.projectId,e.id],P("VEA_PROJECTID",e.projectId),P("VEA_EXHIBITION_ID",e.id),P("VEA_EXHIBITION_NAME",e.name)},A=()=>{const e=w("VEA_EXHIBITION_ID");e&&c.value[e]&&R(c.value[e])},$=async()=>{var r;const{data:e}=await T.query({query:z}),i=((r=e==null?void 0:e.project)==null?void 0:r.list)||[];if(!i.length){f.value=[];return}const t=await Promise.all(i.map(async a=>{var h,I,V;const{data:n}=await T.query({query:H,variables:{query:{page:1,size:999,projectId:a.id,sorting:"startTime DESC"}}}),C=(((V=(I=(h=n==null?void 0:n.exhibition)==null?void 0:h.page)==null?void 0:I.items)==null?void 0:V.filter(l=>l.isEnabled))||[]).map(l=>{const D={id:l.id,name:l.name,projectId:a.id};return c.value[l.id]=D,{text:l.name,value:l.id}});return{text:a.name,value:a.id,children:C}}));f.value=t.filter(a=>{var n;return(n=a.children)==null?void 0:n.length}),A()},x=({value:e,selectedOptions:i})=>{var r;const t=c.value[e];t&&(R(t),d.value=!1,_.push({path:"/ticket/ticket-select",query:{projectId:t.projectId,exhibitionId:t.id,exhibitionName:((r=i==null?void 0:i[1])==null?void 0:r.text)||t.name}}))};return j(async()=>{try{await $()}catch{B("展會數據加載失敗")}}),(e,i)=>{const t=u("van-field"),r=u("van-cell-group"),a=u("van-cascader"),n=u("van-popup");return U(),M("div",G,[E("div",L,[X,E("div",J,[b(r,{class:"pda-selector"},{default:v(()=>[b(t,{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=s=>g.value=s),"is-link":"",readonly:"",label:"展會",placeholder:"請選擇項目/展會",onClick:i[1]||(i[1]=s=>d.value=!0)},null,8,["modelValue"])]),_:1}),b(n,{show:d.value,"onUpdate:show":i[4]||(i[4]=s=>d.value=s),round:"",position:"bottom"},{default:v(()=>[b(a,{modelValue:y.value,"onUpdate:modelValue":i[2]||(i[2]=s=>y.value=s),title:"請選擇展會",options:f.value,onClose:i[3]||(i[3]=s=>d.value=!1),onFinish:x},null,8,["modelValue","options"])]),_:1},8,["show"])])]),K])}}},te=k(Q,[["__scopeId","data-v-2ebac653"]]);export{te as default};
