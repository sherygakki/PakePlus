import{bG as i}from"./vendor-405a226c.js";i`
  query {
    verificationTerminal {
      enabledExhibitions {
        id
        name
      }
    }
  }
`;i`
  query($exhibitionId: UUID) {
    verificationTerminal {
      config(exhibitionId: $exhibitionId) {
        bannerUrl
        allowUnpaidAdmission
        channels {
          id
          name
          code
          displayOrder
          isEnabled
        }
      }
    }
  }
`;i`
  mutation($input: VerificationLoginDtoInput!) {
    verificationTerminal {
      login(input: $input) {
        success
        message
        channel {
          id
          name
          displayOrder
        }
      }
    }
  }
`;i`
  mutation($input: VerificationScanDtoInput!) {
    verificationTerminal {
      scan(input: $input) {
        success
        message
        scannedCode
        recordId
        visitorId
        visitorNo
        visitorName
        phoneNumber
        isPayment
        isRepeated
        isCompletedReg
        printCount
        verificationCount
        dailyVerificationCount
        verificationTime
      }
    }
  }
`;const n=i`
  query($exhibitionId: UUID!) {
    verificationSetting {
      async(exhibitionId: $exhibitionId) {
        id
        exhibitionId
        bannerUrl
        allowUnpaidAdmission
        ipadPassword
      }
    }
  }
`;i`
  mutation($input: VerificationSettingCreateOrUpdateDtoInput!) {
    verificationSetting {
      save(input: $input) {
        id
        bannerUrl
        allowUnpaidAdmission
        ipadPassword
      }
    }
  }
`;const t=i`
  query($exhibitionId: UUID, $onlyEnabled: Boolean!) {
    verificationChannel {
      all(exhibitionId: $exhibitionId, onlyEnabled: $onlyEnabled) {
        id
        name
        code
        displayOrder
        isEnabled
        exhibitionId
      }
    }
  }
`;i`
  query($query: VerificationChannelPagedDtoInput!) {
    verificationChannel {
      page(query: $query) {
        page
        size
        totalCount
        totalPages
        items {
          id
          name
          code
          displayOrder
          isEnabled
          exhibitionId
        }
      }
    }
  }
`;i`
  mutation($input: VerificationChannelCreateDtoInput!) {
    verificationChannel {
      create(input: $input)
    }
  }
`;i`
  mutation($id: UUID!, $body: Any) {
    verificationChannel {
      update(id: $id, body: $body)
    }
  }
`;i`
  mutation($id: UUID!) {
    verificationChannel {
      delete(id: $id)
    }
  }
`;i`
  query($query: VerificationRecordPagedDtoInput!) {
    verificationRecord {
      page(query: $query) {
        page
        size
        totalCount
        totalPages
        items {
          id
          verificationChannelId
          verificationChannelName
          visitorNo
          visitorName
          phoneNumber
          scannedCode
          isSuccess
          failReason
          isPayment
          verificationTime
        }
      }
    }
  }
`;export{n as a,t as q};
