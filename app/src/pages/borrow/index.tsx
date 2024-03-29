import React from 'react';
import { PaddedLayout } from 'components/layouts/PaddedLayout';
import { FlexTitleContainer, PageTitle } from 'components/primitives/PageTitle';
import { links, screen } from 'env';
import { Overview } from 'pages/borrow/components/Overview';
import { ParticipateInLiquidationsButton } from 'pages/borrow/components/ParticipateInLiquidationsButton';
import styled from 'styled-components';
import { CollateralList } from './components/CollateralList';
import { ReactComponent as InfoIcon } from './assets/info.svg';
import { ReactComponent as LinkIcon } from './assets/link.svg';
import { MessageBox } from 'components/MessageBox';
import { useDeploymentTarget } from '@anchor-protocol/app-provider';
import { Section } from '@libs/neumorphism-ui/components/Section';
import { BorderButton } from '@libs/neumorphism-ui/components/BorderButton';
import { StakeButton } from '../earn/components/TotalDepositSection';
import { Button, Link } from '@material-ui/core';
import { ActionButton } from '@libs/neumorphism-ui/components/ActionButton';
export interface BorrowProps {
  className?: string;
}

function BorrowBase({ className }: BorrowProps) {
  const {
    target: { isNative },
  } = useDeploymentTarget();
  return (
    <PaddedLayout className={className}>
      <FlexTitleContainer>
        <PageTitle title="Utility+" docs={links.docs.borrow} />
      </FlexTitleContainer>

      {isNative && (
        <>
          <h2 style={{ fontWeight: '860', fontSize: '20px' }}>
            COMMUNITY FARMING EVENT
          </h2>
          <Section>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>Current Terra Price</div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>UST</span>
              </div>
              <StakeButton coin={'uluna'} coinName={'NOW & GET FREE TerraT'} />
            </section>
            <section
              style={{
                display: 'inline-block',
                width: '50%',
                verticalAlign: 'top',
              }}
            >
              <div className={'head1'}>PROJECTED TerraT PRICE</div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>UST</span>
              </div>
            </section>
          </Section>
          <Section className={'mid'}>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>YOUR FARMED TerraT TOKENS</div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>TerraT</span>
              </div>
            </section>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>
                YOUR PROJECTED SHARE OF TerraT TOKENS
              </div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>TerraT</span>
              </div>
            </section>
          </Section>
          <Section className={'mid'}>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>YOUR CURRENT ALLOCATION VALUE</div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>UST</span>
              </div>
            </section>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>YOUR PROJECTED ALLOCATION VALUE</div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>UST</span>
              </div>
            </section>
          </Section>
          <Section className={'bottom-top'}>
            <section style={{ display: 'inline-block', width: '40%' }}>
              <div className={'head1'}>HOW MUCH TerraT CAN I EARN?</div>
              <StakeButton coin={'uluna'} coinName={'NOW & GET FREE TerraT'} />
            </section>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>YOUR PROJECTED ALLOCATION VALUE</div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>UST</span>
              </div>
            </section>
          </Section>
          <h2 style={{ fontWeight: '860', fontSize: '20px' }}>
            MONTHLY REWARDS PLUS PROGRAM
          </h2>
          <Section className={'bottom-sec'}>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>TERRA TREASURY REWARDS PLUS PROGRAM</div>
              <div className={'head1'}>YOUR QUALIFIED DEPOSIT VALUE</div>
              <div className={'adorn'}>
                <div className={'numbers'}>0.25</div>
                <span className={'denom'}>UST</span>
              </div>
              <ActionButton className="claim" component={Link} to={`/earn`}>
                SAVE MORE
              </ActionButton>
            </section>
            <section style={{ display: 'inline-block', width: '50%' }}>
              <div className={'head1'}>QUALIFYING PHASE STATUS</div>
              <Button
                variant="contained"
                color="secondary"
                style={{ borderRadius: '20px', height: '29px', width: '93px' }}
              >
                off
              </Button>
              <InSection className={'bottom-desc'}>
                <div>
                  IF THE BUTTON IS GREEN, THIS MEANS EVERY DEPOSIT DURING THIS
                  PERIOD QUALIFIES YOU FOR THE MONTHLY REWARDS+ PROGRAM.
                </div>
                <br />
                <br />
                <div>
                  IF THE BUTTON IS RED, THIS MEANS YOU NEED TO KEEP YOUR BALANCE
                  DEPOSITED TO BECOME ELIGIBLE FOR THE NEXT QUALIFIYNG PHASE.
                </div>
                <br />
                <br />
                <div>ALL PAYOUTS OF THE REWARDS+ PROGRAM ARE AUTOMATED.</div>
              </InSection>
            </section>
          </Section>
        </>
      )}
    </PaddedLayout>
  );
}

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 700px) {
    width: 100%;
    gap: 0;
    justify-content: stretch;
    flex-direction: column;
  }
`;

const InSection = styled(Section)`
  background: #493c3c;
  border: 3px solid #ffffff;

  height: 190px !important;
  font-size: 13px;
  font-weight: 860;
  .NeuSection-content {
    padding: 10px 60px 10px 60px !important;
    height: 190px !important;
  }
  .NeuSection-root {
    height: 190px !important;
  }
`;
export const Borrow = styled(BorrowBase)`
  // ---------------------------------------------
  // style
  // ---------------------------------------------
  .adorn {
    display: flex;
    align-items: baseline;
    .denom {
      margin-left: 5px;
      font-weight: 860;
    }
  }

  .bottom-desc {
  }

  .bottom-sec {
    .NeuSection-content {
      height: 389px;
    }
    .NeuSection-root {
      height: 389px;
    }
  }
  .bottom-top {
    .NeuSection-content {
      height: 230px;
    }
    .NeuSection-root {
      height: 230px;
    }
  }
  .top {
    .NeuSection-content {
      height: 275px;
    }
    .NeuSection-root {
      height: 275px;
    }
  }
  .mid {
    .NeuSection-content {
      height: 200px;
    }
    .NeuSection-root {
      height: 200px;
    }
  }
  .numbers {
    font-size: 35px;
    font-weight: 860;
  }
  .head1 {
    font-size: 20px;
    font-weight: 860;
    margin-bottom: 20px;
  }
  .market {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    h1 {
      img {
        transform: scale(1.3) translateY(3px);
        margin-right: 5px;
      }
    }

    .loan-buttons {
      display: grid;
      grid-template-columns: repeat(2, 180px);
      grid-gap: 10px;

      button {
        height: 48px;
        border-radius: 26px;
      }
    }
  }

  h2 {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: ${({ theme }) => theme.textColor};
  }

  .borrow {
    article {
      margin-bottom: 80px;
    }

    figure {
      height: 53px;
    }
  }

  .collateral-list,
  .loan-list {
    table {
      thead {
        th {
          text-align: right;

          &:first-child {
            font-size: 12px;
            font-weight: 500;
            color: ${({ theme }) => theme.textColor};
            text-align: left;
          }
        }
      }

      tbody {
        td {
          text-align: right;

          .value,
          .coin {
            font-size: 16px;
          }

          .volatility,
          .name {
            font-size: 12px;
            color: ${({ theme }) => theme.dimTextColor};
          }

          &:first-child {
            text-align: left;

            display: flex;

            align-items: center;

            i {
              width: 60px;
              height: 60px;

              margin-right: 15px;

              svg,
              img {
                display: block;
                width: 60px;
                height: 60px;
              }
            }

            .coin {
              font-weight: bold;

              grid-column: 2;
              grid-row: 1/2;
            }

            .name {
              grid-column: 2;
              grid-row: 2;
            }
          }

          &:last-child {
            button {
              height: 32px;
              font-size: 12px;
              font-weight: 500;

              padding: 0 24px;

              &:not(:last-child) {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }

  .message-box {
    font-size: 13px;
    color: ${({ theme }) => theme.messageBox.textColor};
    svg: {
      path {
        fill: ${({ theme }) => theme.messageBox.textColor};
      }
    }
    a {
      color: ${({ theme }) => theme.messageBox.linkColor};
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      svg {
        margin-left: 4px;
      }
    }
  }

  // ---------------------------------------------
  // layout
  // ---------------------------------------------
  .collateral-list,
  .loan-list {
    h2 {
      margin-bottom: 30px;
    }
  }

  // tablet
  @media (min-width: ${screen.tablet.min}px) and (max-width: ${screen.tablet
      .max}px) {
    .market {
      flex-direction: column;
      align-items: flex-start;

      .loan-buttons {
        width: 100%;
        margin-top: 20px;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  // mobile
  @media (max-width: ${screen.mobile.max}px) {
    .market {
      flex-direction: column;
      align-items: flex-start;

      .loan-buttons {
        width: 100%;
        margin-top: 20px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .collateral-list,
    .loan-list {
      h2 {
        margin-bottom: 20px;
      }
    }
  }

  // borrow
  @media (min-width: 1400px) {
    .borrow {
      article {
        display: flex;

        > div {
          flex: 1;

          &:not(:first-child) {
            margin-left: 18px;
          }
        }
      }
    }
  }

  @media (max-width: 1399px) {
    .borrow {
      article {
        display: flex;
        flex-direction: column;

        > div {
          flex: 1;

          &:not(:first-child) {
            margin-top: 18px;
          }
        }
      }
    }
  }
`;
