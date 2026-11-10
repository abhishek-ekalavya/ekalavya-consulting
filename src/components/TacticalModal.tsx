const send = async (subj: string, lines: string[], nextView: ModalView, setBusy: (v: boolean) => void) => {
    const msg = lines.join('\n');
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '88d3e730-c5b1-4549-920d-5511aa528dff',
          subject: subj,
          from_name: 'Ekalavya Consulting Website',
          message: msg,
        }),
      });
    } catch (e) {
      console.error(e);
    }
    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(msg), '_blank');
    setBusy(false);
    onSelectView(nextView);
  };
