import { u, UST } from '@anchor-protocol/types';
import React, { useMemo } from 'react';
import { DoughnutChart } from './DoughnutChart';
import {useTheme} from '@material-ui/core'
export interface TotalValueLockedDoughnutChartProps {
  totalDeposit: u<UST>;
  totalCollaterals: u<UST>;
  totalDepositColor: string;
  totalCollateralsColor: string;
}

export const TotalValueLockedDoughnutChart = (
  props: TotalValueLockedDoughnutChartProps,
): JSX.Element => {
  const theme = useTheme();
  const descriptors = useMemo(() => {
    return [
      {
        label: 'Total Deposit',
        color: '#000000',
        value: props.totalDeposit,
      },
      {
        label: 'Total Collateral',
        color: '#FBD85D',
        value: props.totalCollaterals,
      },
    ];
  }, [
    props.totalCollaterals,
    props.totalDeposit,
  ]);

  return <DoughnutChart descriptors={descriptors} />;
};
