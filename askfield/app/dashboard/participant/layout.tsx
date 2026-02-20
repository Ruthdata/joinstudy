import DashboardLayout from "../../components/Dashboard/Participant/DashboardLayout";

export default function ParticipantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}