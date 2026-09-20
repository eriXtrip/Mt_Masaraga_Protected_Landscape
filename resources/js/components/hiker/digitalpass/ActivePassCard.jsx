import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, Eye, ChevronRight } from 'lucide-react';
import HikerTicketPass from '@/components/features/HikerTicketPass';
import { StatusPill } from './helpers';

export default function ActivePassCard({ pass }) {
    const navigate = useNavigate();

    const downloadQr = () => {
        const link = document.createElement('a');
        link.href = pass.qrCodeUrl;
        link.download = `${pass.id}.webp`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-5 md:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase">
                        {pass.transactionId}
                    </span>
                    <StatusPill status={pass.status} />
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 cursor-pointer"
                        onClick={downloadQr}
                    >
                        <Download className="h-3.5 w-3.5" />
                        Download QR
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 cursor-pointer text-primary hover:text-primary"
                        onClick={() => navigate('/hiker/transactions')}
                    >
                        <Eye className="h-3.5 w-3.5" />
                        View Booking
                        <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>

            <HikerTicketPass currentPass={pass} />
        </div>
    );
}
