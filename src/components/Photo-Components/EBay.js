import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import '../css/photos.css';

import StorageGallery from './StorageGallery';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

function EBay() {
    return (
        <div className="photo-section container-fluid color-scheme-alt">
            <h3 className="section-heading">Emerald Bay</h3>
            <br />
            <Authenticator hideSignUp={true}>
                {({ signOut, user }) => (
                    <>
                        <button onClick={signOut}>Sign out</button>
                        <StorageGallery target="ebay/" />
                    </>
                )}
            </Authenticator>
        </div>
    );
}

export default EBay;

/*

const formFields = {
  confirmVerifyUser: {
    confirmation_code: {
      labelHidden: false,
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

const components = {
  VerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },

  ConfirmVerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};
*/
